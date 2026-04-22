import express from "express";
import {
  get_animales,
  get_animales_id,
  create_animales,
  update_animales,
  delete_animal,
} from "../controller/animalesController.js";

const router = express.Router();

router.get("/", get_animales);
router.get("/:id", get_animales_id);
router.post("/", create_animales);
router.put("/:id", update_animales);
router.delete("/:id", delete_animal);

export default router;
