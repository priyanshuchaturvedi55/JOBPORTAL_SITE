import express from "express";
import { logout,login, register, updateProfile } from "../controllers/user.controller.js";

import isAuthenticated from "../middlewaress/isAuthenticated.js";
import { singleUpload } from "../middlewaress/multer.js";


const router = express.Router();
router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);
export default router;