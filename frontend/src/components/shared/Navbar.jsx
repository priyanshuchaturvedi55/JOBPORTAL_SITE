import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover.jsx"; // Assuming Radix UI is used
import { Avatar, AvatarImage } from "@/components/ui/avatar.jsx";
import { Button } from "@/components/ui/button";
import { User2, LogOut } from "lucide-react";
import { Link } from 'react-router-dom';


 // Assuming Radix UI Avatar is used
 const user = false;

const Navbar = () => {
  return (
    
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/job">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                    <Link to="/login"><Button variant="outline">Login</Button></Link>
                    <Link to="/signup"><Button className="bg-[#6A38C2] hover:">Signup</Button></Link>
                    
                </div>
            ):(
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Crack</h4>
                      <p className="text-sm text-muted-foreground">
                        SoftEnginner/ webdeveloper/ App developer
                      </p>
                    </div>
                  </div>
    
                   {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++? */}
    
                  <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2/>
                      <Button variant="link" className="bg-white">
                        View Profile
                      </Button>
                    </div>
                    <div className="flex w-fit items-center my-2 gap-2 cursor-pointer">
                      <LogOut/>
                      <Button variant="link" className="bg-white">
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
          
            )
          }
            </div>
          </div>
       

  );
};

export default Navbar;
