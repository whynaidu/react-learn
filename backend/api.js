const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require("./db/conn");
dotenv.config({ path: "./config.env" });

const wallpaperschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  wallpaper_url: {
    type: String,
  },
});

const Wallpaper = mongoose.model("wals", wallpaperschema);

const PORT = process.env.PORT;

const Storage = multer.diskStorage({
  destination: "../public/uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: Storage,
});


app.post("/upload", upload.single("wallls"), (req, res) => {
  const newwallpaper = new Wallpaper({
    name: req.body.name,
    category: req.body.category,
    wallpaper_url: req.file.filename,
  });
  newwallpaper
    .save()
    .then(() => res.send("WallPaper Uploaded"))
    .catch((err) => res.send(err));
});

app.get("/:category", async (req, res) => {
  const data = await Wallpaper.find({ category: req.params.category });
  console.log(data);
  res.send(data);
});

app.get("/view/:id", async (req, res) => {
  const data = await Wallpaper.find({ _id: req.params.id });
  console.log(data);
  res.send(data);
});

app.get("/", async (req, res) => {
  const data = await Wallpaper.find({ category: "desktop" });
  res.send(data);
});

app.post("/deleteall", async (req, res) => {
  const data = await Wallpaper.deleteMany();
  console.log(data);
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
