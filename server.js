const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const workout = require("./models/workout-table")
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
