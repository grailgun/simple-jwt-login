require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize } = require("./models");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async(req,res) => {
  return res.json({
    status: "OK",
    message: "Good"
  })
})

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  console.log("Connected to Port : " + PORT);
  await sequelize.sync();
  console.log("Connected to Database");
});
