import express from "express";
import { protegir, autorizar } from "../middleware/authmiddleware.js";
import { saludar } from "../controller/pruebaController.js";

const router = express.Router();

router.get("/", protegir, autorizar("admin"), saludar);

export default router;
