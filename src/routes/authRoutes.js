import express from "express";
import { create_user } from "../controller/authController.js";

const router = express.Router();

router.post("/", create_user);

export default router