const express = require("express");
const app = express();
//import creates routes
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

//middleware
// to parse data from req.body in json format
app.use(express.json());
//loading front end
app.use(express.static("./public"));

//routes
//get all task
app.use("/api/v1/tasks", tasks);
//wrong routes
app.use(notFound);

//handling error - any error passed to next() is handled by express
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
