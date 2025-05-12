import { Router } from "express";

import {
  getNotes,
  getAddNote,
  postAddNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const router = Router();

router.get("/", getNotes);

router.get("/add-note", getAddNote);
router.post("/add-note", postAddNote);

router.patch("/update/:id", updateNote);

router.delete("/delete/:id", deleteNote);

export default router;
