const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const routes = require("./routes");

const app = express();

app.use("/", routes);

const port = 9000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
