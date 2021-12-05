//Required Dependencies
const express = require("express");
const path = require("path");
const router=express.Router();

//notes file
router.get("/notes", (req,res)=>{
	res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//index file
router.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname,"../public/index.html"));
});

module.exports = router