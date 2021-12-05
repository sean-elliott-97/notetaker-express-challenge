//required Dependencies
const fs = require("fs");
const router = require("express").Router();
const uuid = require("uuid");
const path = require("path");

//return existing notes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname,"../db/db.json"));
});

//create a new note
//adds a unique id to created note
router.post("/notes", (req, res) => {
  const allNotes = JSON.parse(fs.readFileSync("./db/db.json"));
  const newNotes = req.body;
  newNotes.id = uuid.v4();
  allNotes.push(newNotes);
  fs.writeFileSync("./db/db.json", JSON.stringify(allNotes));
  res.json(allNotes);
});

//delete an existing note by id
router.delete("/notes/:id",(req,res)=>{
  const notes=JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteNote=notes.filter((n)=>n.id!==req.params.id);
  fs.writeFileSync("./db/db.json",JSON.stringify(deleteNote));
  res.json(deleteNote);
})

module.exports = router;
