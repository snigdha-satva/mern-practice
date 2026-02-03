import express from "express";
import {
  getAllNotes,
  updateNote,
  deleteNote,
  createNote
} from "../controllers/notes.Controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
