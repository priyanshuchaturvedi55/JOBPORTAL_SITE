import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import { RadioGroup } from "@/components/ui/radio-group.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader, Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const {loading} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try{
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, 
        {headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate("/");
        toast.success(res.data.message)
      }
    }
    catch(error){
       console.log(error);
       toast.error(error?.response?.data?.message || "An error occurred");
    }
    finally{
      dispatch(setLoading(false));
    }
  };


  return (
    <div>
      <Navbar />
      <div className="flex  items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className=" w-1/2 border border-gray-200  rounded-md p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="chaturvedi@gmail.com"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="*******"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Students</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role == "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>



          </div>
          {
            loading ? <Button><Loader2 className="mr-2 h-4 w-4 animate-spain"/> Please wait </Button> :  <Button type="submit" className="w-full my-4 bg-black hover:bg-gray-800 text-white"> Login </Button>
          }
          <span className="text-sm">
            Don;t have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>{" "}
          </span>


        </form>
      </div>
    </div>
  );
};

export default Login;
