import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setSearchedQuery, setSelectedSalaryRange } from "@/redux/jobSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1lakh-8lakh", "9lakh-25lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };
  const salaryRangeHandler = (value) => {
    setSelectedSalary(value); // Update salary range state
  };
  useEffect(() => {
    console.log("Selected Value:", selectedValue);
    console.log("Selected Salary Range:", selectedSalary);
    dispatch(setSearchedQuery(selectedValue));
    dispatch(setSelectedSalaryRange(selectedSalary));
  }, [selectedValue, selectedSalary]);
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div>
            <h1>{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index} - ${idx}`;
              const isSalaryFilter = data.filterType === "Salary";
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} 
                  id={itemId} 
                  onClick=
                  {() => {
                    if (isSalaryFilter) {
                      salaryRangeHandler(item); // Use salaryRangeHandler for salary filter
                    } else {
                      changeHandler(item); // Use changeHandler for other filters
                    }
                  }}
                  />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
