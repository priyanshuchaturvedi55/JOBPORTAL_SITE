import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover.jsx"; // Assuming Radix UI is used
import { Avatar, AvatarImage } from "@/components/ui/avatar.jsx";
import { Button } from "@/components/ui/button";
import { User2, LogOut } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";


 // Assuming Radix UI Avatar is used
 
 
 /////////// user hook are always reside inside the function.

const Navbar = () => {
  const {user}= useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler= async () =>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message)||"An error occured";
    }
  }
  
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
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
    
                   {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++? */}
    
                  <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2/>
                      <Button variant="link"  className="bg-white">
                        <Link to="/profile"> View Profile</Link>
                      </Button>
                    </div>
                    <div className="flex w-fit items-center my-2 gap-2 cursor-pointer">
                      <LogOut/>
                      <Button onClick = {logoutHandler}variant="link" className="bg-white">
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
