const express = require("express");
require("dotenv").config();

const dbConnect = require("./config/database");
const userRouter = require("./routes/user.route");
const profileRouter = require("./routes/profile.route");

const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/profile/", profileRouter )

app.use("/", function (req,res){
  res.status(500).json({message: "SOMETHING HAPPENED"});
})

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});