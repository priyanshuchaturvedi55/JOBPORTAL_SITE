import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["Html", "Css", "Javascript", "Reactjs"];

const Profile = () => {
  const isResume = true;

  return (
    <div className="">
      <Navbar />

      <div className=" max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="">
              <AvatarImage
                className="h-20 w-20 rounded-full"
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet quam nam repellat.
              </p>
            </div>
          </div>
          <Button className="text-right" varient="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>chaturvedi@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8989898989</span>
          </div>
        </div>

        <div className="my-5">
          <h1 className="text-xl my-3 ">Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((item, index) => (
                <Badge
                  className={"text-blue-700 font-bold"}
                  variant="ghost"
                  key={index}
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://github.com/priyanshuchaturvedi55"
              className="text-blue-500 w-full c"
            >
              Priyanshu
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
        
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="text-lg font-bold my-5">Applied Jobs</h1>
          <AppliedJobTable/>
        </div>
    </div>
  );
};

export default Profile;
