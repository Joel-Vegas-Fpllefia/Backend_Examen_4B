import express from "express";
import {
  get_animales,
  get_animales_id,
} from "../controller/animalesController.js";

const router = express.Router();

router.get("/", get_animales);
router.get("/:id", get_animales_id);

export default router;
