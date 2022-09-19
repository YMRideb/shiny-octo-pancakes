const express = require("express");
const cors = require("cors");

// const mongoose = require('mongoose');

const port = 8000;

require("./config/mongoose.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { authorRouter } = require("./routes/author.routes");
app.use(cors());

app.use("/api/authors", authorRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);