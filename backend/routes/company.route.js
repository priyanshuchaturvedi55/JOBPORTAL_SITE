import express from "express";
import { registerCompany,getcompany, getcompanyById, updatecompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewaress/isAuthenticated.js";
import { singleUpload } from "../middlewaress/multer.js";


const router = express.Router();
router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getcompany);
router.route("/get/:id").get(isAuthenticated,getcompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload,updatecompany);
export default router;