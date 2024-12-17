import express from "express";
import { logout,login, register, updateProfile } from "../controllers/user.controller.js";

import isAuthenticated from "../middlewaress/isAuthenticated.js";


const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);
export default router;