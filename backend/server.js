require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(
      process.env.PORT,
      console.log("connected to bd & listening on port ", process.env.PORT)
    );
  })
  .catch((err) => {
    console.log(err);
  });
