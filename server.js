//required dependencies
const express = require("express");
const htmlRoutes=require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//initialize express
const app = express();
const PORT = process.env.PORT||3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/",htmlRoutes);

//starts the server
app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`));
