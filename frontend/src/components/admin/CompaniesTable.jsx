import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell } from "../ui/table";
import { TableCaption, TableHead, TableHeader, TableRow } from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies = [], searchCompanies } = useSelector((store) => store.company || {});
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanies) {
          return true;
        }
        return company?.name?.toLowerCase().includes(searchCompanies.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanies]);

  return (
    <div>
      <Table>
        <TableCaption>A List of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company) => (
            <TableRow key={company._id} > {/* Use TableRow instead of <tr> */}
              <TableCell>
                <Avatar className="">
                  <AvatarImage
                    className="h-10 w-13 rounded-full "
                    src={company.logo}
                  />
                </Avatar>
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div className="flex items-center gap-2 w-fit cursor-pointer"
                    onClick={() => navigate(`/admin/companies/${company._id}`)}
                    >
                      <Edit2 className="w-4" />
                      <span>Edit</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
