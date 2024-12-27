import { Dialog, DialogContent, DialogFooter, DialogTitle } from "./ui/dialog";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "./utils/constant";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setloading] = useState(false);
    const {user} = useSelector(store=>store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname,
        email:user?.email,
        phoneNumber:user?.phoneNumber,
        bio:user?.profile?.bio,
        skills:user?.profile?.skills?.map(skill=>skill),
        file:user?.profile?.resume
    })
    const dispatch = useDispatch();
    const onChangeEventHandler=(e) =>{
        setInput({...input, [e.target.name]: e.target.value});
    };
    const FileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput(...input,file);

    };
    const submitHandler= async(e) =>{
        e.preventdefault();
        console.log(input);
        const formData = new formData();
        formData.append ("fullname",input.fullname);
        formData.append("Email",input.email);
        formData.append("phoneNumber",input.phoneNumber);
        formData.append("bio",input.bio);
        formData.append("skills",input.skills);
        if(input.file){
        formData.append("file",input.file);
        }
        try {
            const res= await axios.post(`${USER_API_END_POINT}/profile/update`, formData,{
                headers:{
                    'content-type':'multipart/form-data'
                },
                withcredential:true
            })
            if(res.data.success){
                dispatch(setUser(res.data.user));
                toast(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "An error occurred");
        }
        setOpen(false);
        console.log(input);


    };
  return (
    <div onSubmit={submitHandler}>
      <Dialog open={open}>
        <DialogContent className="bg-white sm:max-w-[425px]" onInteractOutside = {() => setOpen(false)} >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className=" text-md text-right">
                  Name
                </Label>
                <Input id="name" name="name" value={input.fullname} type="text" onChange={onChangeEventHandler} className="col-span-3" />
              </div>


              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className=" text-md text-right">
                 Email
                </Label>
                <Input id="email" name="email" value={input.email} type="email" onChange={onChangeEventHandler} className="col-span-3" />
              </div>


              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className=" text-md text-right">
                  Number
                </Label>
                <Input id="number" name="number"  value={input.phoneNumber} type="text" onChange={onChangeEventHandler} className="col-span-3" />
              </div>


              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className=" text-md text-right">
                  Bio
                </Label>
                <Input id="bio" name="bio" value={input.bio} type="text" onChange={onChangeEventHandler} className="col-span-3" />
              </div>


              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className=" text-md text-right">
                  Skills
                </Label>
                <Input id="skills" name="skills" value={input.skills} type="text" onChange={onChangeEventHandler} className="col-span-3" />
              </div>


              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className=" text-md text-right">
                  Resume
                </Label>
                <Input id="file" name="file" type = "file" onChange={FileHandler} className="col-span-3" accept = "application/pdf" />
              </div>
            </div>
            <DialogFooter>
            {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spain"/> Please wait </Button> :  <Button type="submit" className="w-full my-4 bg-black hover:bg-gray-800 text-white"> update </Button>
            }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default UpdateProfileDialog;
