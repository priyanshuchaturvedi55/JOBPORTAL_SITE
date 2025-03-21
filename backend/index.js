import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import JobRoute from "./routes/jobs.route.js";
import applicants from "./routes/application.route.js";

dotenv.config({});
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true  
}
app.use(cors(corsOptions));

///api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", JobRoute);
app.use("/api/v1/application", applicants);

const PORT = process.env.PORT|| 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})