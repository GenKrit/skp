const mongoose = require("mongoose");
require('dotenv').config();
const url = process.env.DATABASE_URL||"mongodb://0.0.0.0:27017/react-login"
mongoose
  .connect(url)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("E-com", newSchema,"E-com");

module.exports = collection;
