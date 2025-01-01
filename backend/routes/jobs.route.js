import express from "express";
import { postJob,getAllJobs, getJobById, getAdminJobs } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewaress/isAuthenticated.js";


const router = express.Router();
router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
export default router;