const express = require("express");
const { getAllNotes, updateNote, deleteNote, createNote } = require("../controllers/notes.Controller");
const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;
