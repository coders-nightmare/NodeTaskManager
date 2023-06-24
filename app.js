const express = require("express");
const app = express();
//import creates routes
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();

//middleware
// to parse data from req.body in json format
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager and App");
});

//get all task
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();