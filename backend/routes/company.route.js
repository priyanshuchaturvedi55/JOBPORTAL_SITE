import express from "express";
import { registerCompany,getcompany, getcompanyById, updatecompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewaress/isAuthenticated.js";


const router = express.Router();
router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getcompany);
router.route("/get/:id").get(isAuthenticated,getcompanyById);
router.route("/update/:id").post(isAuthenticated,updatecompany);
export default router;