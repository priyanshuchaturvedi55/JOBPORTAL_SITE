import {  Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white">
      <div className="flex items-center justify-between">
        <p>2 days ago</p>
        <Button variant="outline" className="rounded-full p-2" size="icon"><Bookmark /></Button>
      </div>
      

      <div className="flex item-center gap-2 my-2">
        <Button className="p-2 rounded-full" size="icon">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://s.tmimgcdn.com/scr/800x500/200400/accounting-tax-financial-business-logo-design_200426-original.jpg"
              className="w-full h-full object-cover rounded-full"
            />
          </Avatar>
        </Button>
        <div>
          <h1>Company Name</h1>
          <p>India</p>
        </div>
      </div>
   
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quam suscipit ipsa possimus dolores? Ab, sunt. Distinctio est tempore delectus?</p>
    </div>
        <div className="flex items-center gap-2 mt-4">
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Position</Badge>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">24LPA</Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
            <Button variant="outline">Details</Button>
            <Button className="bg-[#7209b7]">Save For Later</Button>
        </div>
    </div>
    
  );
};

export default Job;
