const express = require("express");
const dotenv = require("dotenv");
const cookiesParser = require("cookie-parser");

const app = express();
dotenv.config();

app.use(express.json());

app.listen(8080, () => {
  console.log(`Server is running at port 8080`);
});
