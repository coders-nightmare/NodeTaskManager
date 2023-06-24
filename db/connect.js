const mongoose = require("mongoose");

//we are passing a url as we want our database connection to be connected first as we want it to be synchronous because our application is depended whole on database
//in this we are returning a promise
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
