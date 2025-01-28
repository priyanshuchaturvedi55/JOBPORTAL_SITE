import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../Utils/datauri.js";
import cloudinary from "../Utils/cloudinary.js";

export const register = async(req,res) =>{
    try{
        const{fullname, email, phoneNumber, password, role} = req.body;
        if(!fullname ){
            return res.status(400).json({
                message:"fullname is missing ",
                success:false
            });
        };
        if(!email){
            return res.status(400).json({
                message:"Email is missing ",
                success:false
            });
        };
        if(!phoneNumber){
            return res.status(400).json({
                message:"phoneNumber is missing ",
                success:false
            });
        };
        if(!password ){
            return res.status(400).json({
                message:"password is missing ",
                success:false
            });
        };
        if(!role ){
            return res.status(400).json({
                message:"role is missing ",
                success:false
            });
        };
        const file = req.file;
        if (!file) {
            return res.status(400).json({
              message: "File is missing.",
              success: false
            });
          }

          if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:" everthing is missing ",
                success:false
            });
        };  
        try{
        const fileUri = getDataUri(file);
        const cloudinaryResponse = await cloudinary.uploader.upload(fileUri.content,{
            resource_type: 'raw',
        });
        return res.status(200).json({
            message: "File uploaded successfully.",
            success: true,
            cloudinaryData: cloudinaryResponse
          });
        }  
        catch(error){
            return res.status(500).json({
                message: "Error uploading file to Cloudinary.",
                success: false,
                error: error.message
              });
        }
       
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"user already exist with this email",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
            profile:{
                profilePhoto:cloudinaryResponse.secure_url,
            }
        })
        return res.status(201).json({
            message:"Account created successfully.",
            success: true
        });
    }
    catch(error){
            console.log(error);
    }
}
export const login = async(req,res) =>{
    try{
        const{email, password, role} = req.body;

        if(!email || !password || !role){
            return res.status(400).json({
                message: "something is missing",
                success:false
            });
        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }
        const isPassword = await bcrypt.compare(password,user.password);
        if(!isPassword){
            return res.status(400).json({
                message:"Incorrect email or password",
                success: false
            });
        }
        if(role != user.role){
            return res.status(400).json({
                message:"Account doesn't exist with current role.",
                success: false
            });
        }
        const tokenData = {
            userId:user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY,{expiresIn:'1d'});
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }

        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpsOnly:true, samesite:'strict'}).json({
            message:`Welcome back ${user.fullname}`,
            user,
            success: true
        })
    }
    catch(error){
           console.log(error);
    }   
}
export const logout = async (req,res) =>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully.",
            success:true
        })
    }
    catch{
        console.log(error);
    }
}
export const updateProfile = async(req,res) =>{
    try{
        const{fullname, email, phoneNumber, bio , skills} = req.body;
        const file = req.file;
        // cloundinay ayega idhar
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
            resource_type: 'raw', // Ensures PDFs and other files are handled correctly
        });
        
        //// making some updatation
        let skillsArray = [];
        if(skills) {
             skillsArray = skills.split(","); // Split skills by comma to create an array
        }
        const userId = req.id;
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"user not found",
                success:false
            })
        };
        
            if(fullname) user.fullname = fullname
            if(email) user.email = email
            if(phoneNumber) user.phoneNumber = phoneNumber
            if(bio) user.profile.bio = bio
            if(skills) user.profile.skills = skillsArray



            if(cloudResponse){
                user.profile.resume= cloudResponse.secure_url
                user.profile.resumeOriginalName = file.originalname
            }

            await user.save();
            user = {
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
                phoneNumber:user.phoneNumber,
                role:user.role,
                profile:user.profile
            }
           
            return res.status(200).json({
                message:"profile updated successfully.",
                user,
                success:true
            })    
        }
        catch(error){
            console.log(error);
        }
 }

