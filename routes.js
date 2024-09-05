const express = require("express");
const User = require("./user");

const router = express.Router();

//Create a new user
router.post("/users", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = new User({ name, email, age });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;
