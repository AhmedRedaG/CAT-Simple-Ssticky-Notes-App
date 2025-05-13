import { Router } from "express";

import {
  getNotes,
  getAddNote,
  postAddNote,
  getUpdateNote,
  postUpdateNote,
  getDeleteNote,
} from "../controllers/notes.js";

const router = Router();

router.get("/", getNotes);

router.get("/add", getAddNote);
router.post("/add", postAddNote);

router.get("/update/:id", getUpdateNote);
router.post("/update/:id", postUpdateNote);

router.get("/delete/:id", getDeleteNote);

export default router;
