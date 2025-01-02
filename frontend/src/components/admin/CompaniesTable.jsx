import { Table, TableBody, TableCell } from "../ui/table";
import React from "react";
import { TableCaption, TableHead, TableHeader, TableRow } from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";

const CompaniesTable = () => {
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
          <TableCell>
            <Avatar className="">
              <AvatarImage
                className="h-20 w-20 rounded-full "
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>02-01-2025</TableCell>
          <TableCell className="text-right cursor-pointer">
             <Popover>
                <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className="w-32">
                   <div className="flex items-center gap-2 w-fit cursor-pointer">
                      <Edit2 className="w-4"/>
                      <span>Edit</span>
                   </div>
                </PopoverContent>
             </Popover>
          </TableCell>

        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
