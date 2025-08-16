const express = require('express');
const app = express();
require("dotenv").config(); // with this line our project will have the ability to read from the .env file
const {errorHandler , notFoundHandler} = require("./middlewares/errors");
const {connectToDB}=require("./config/db_connection");
const tasks = require("./routes/tasks");

// DataBase Connection 
connectToDB();

// Middleware
app.use(express.json());


// Routes
app.get("/",(req,res)=>{
    res.send("Task Manager Api");
});
app.use("/api/v1/tasks",tasks);


// Error + Not Found Handler
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});












