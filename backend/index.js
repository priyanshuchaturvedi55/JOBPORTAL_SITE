import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";

dotenv.config({});
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin:'http//localhost:3000',
    credential:true
}
app.use(cors(corsOption));
///api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);

const PORT = process.env.PORT|| 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})