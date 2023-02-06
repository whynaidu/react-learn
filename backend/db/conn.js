const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const DB = process.env.DATABASE;

mongoose
  .connect(
    "mongodb+srv://whynaidu:vedant@wally.wfoyhev.mongodb.net/wally?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(err));
