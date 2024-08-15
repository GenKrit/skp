const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

require('dotenv').config();
const PORT = process.env.PORT || 8000


app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.json({ status: "success", message: "Login successful", user });
      } else {
        res.json({ status: "error", message: "Incorrect password" });
      }
    } else {
      res.json({ status: "error", message: "User does not exist" });
    }
  } catch (e) {
    res.json({ status: "error", message: "An error occurred", error: e.message });
  }

})


app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const data = {
    email: email,
    password: password,
    name: name,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json({ status: "error", message: "User already exists" });
    } else {
      await collection.insertMany([data]);
      res.json({ status: "success", message: "User created", data });
    }
  } catch (e) {
    res.json({ status: "error", message: "An error occurred", error: e.message });
  }
});


app.listen(8000, () => {
  console.log(`Port connected:${PORT}`);
})
