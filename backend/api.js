const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bycrypt = require("bcryptjs");
const { response } = require("express");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: true }));
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
  count: {
    type: Number,
  },
  uploadedby: {
    type: String,
  },
  uploadedat: {
    type: Date,
    default: Date.now(),
  },
  status: { type: String }
});

const Wallpaper = mongoose.model("wals", wallpaperschema);

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  mywallpapers: {
    type: [String],
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

adminSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const admin = mongoose.model("adminUser", adminSchema);

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

app.post("/upload", upload.single("wallls"), async (req, res) => {
  // const {name,category,wallpaper_url}
    const user = req.params.userid;

  const newwallpaper = new Wallpaper({
    name: req.body.name,
    category: req.body.category,
    wallpaper_url: req.file.filename,
    status: "unApproved",
    uploadedby: user,
    count: 0,
  });
  newwallpaper
    .save()
    .then(() => res.send(newwallpaper))
    .catch((err) => res.send(err));

});

app.post("/upload/:userid", upload.single("wallls"), async (req, res, next) => {
  // const {name,category,wallpaper_url}
  const user = req.params.userid;

  const newwallpaper = new Wallpaper({
    name: req.body.name,
    category: req.body.category,
    wallpaper_url: req.file.filename,
    uploadedby: user,
    status: "unApproved",
    count: 0,
  });
  newwallpaper
    .save()
    .then(() => res.send(newwallpaper))
    .catch((err) => res.send(err));
  const wallpaper_id = newwallpaper._id.toHexString();
  console.log(wallpaper_id);

  const updateAarray = await admin.findOneAndUpdate(
    { _id: user },
    {
      $push: {
        mywallpapers: wallpaper_id,
      },
    },
    {
      returnOriginal: false,
    }
  );

  console.log(updateAarray);
});


app.post("/view/:name", async (req, res) => {
  const name = req.params.name;

  const views = await Wallpaper.updateOne(
    { wallpaper_url: name },
    { $inc: { count: 1 } }
  );
  const getviews = await Wallpaper.findOne({ wallpaper_url: name });
  res.send(getviews);
});

app.get("/:category", async (req, res) => {
  const data = await Wallpaper.find({ category: req.params.category });
  console.log(data);
  res.send(data);
});

app.get("/", async (req, res) => {
  const data = await Wallpaper.find({ category: "desktop" }).sort({ _id: -1 });  
  res.send(data);
});

app.post("/login", async (req, res) => {
  try {
    const { adminemail, password } = req.body;

    if (!adminemail || !password) {
      return res.send({ error: "please fill all the fields" });
    }

    const userLogin = await admin.findOne({ email: adminemail });

    if (userLogin) {
      const isMatch = await bycrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("login_token", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "user error" });
      } else {
        res.send({
          message: "user login sucesss",
          token: token,
        });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/deleteall", async (req, res) => {
  const data = await Wallpaper.deleteMany();
  console.log(data);
  res.send(data);
});

app.post("/status/:id", async (req, res) => {
  let wallpaperId = req.params.id;
  var wallpaper_id = { _id: wallpaperId };
  const data = await Wallpaper.findOneAndUpdate(wallpaper_id,
  { status: 'Approved' },
  
    {
      returnOriginal: false,
    });
  console.log(data);
  res.send(data);
});

app.post("/delete/:id", async (req, res) => {
  let wallpaperId = req.params.id;
  
  const data = await Wallpaper.findOne({ _id: wallpaperId });
  var WallpaperResponse = data.wallpaper_url;
  
  fs.unlink("../public/uploads/" + WallpaperResponse, (err) => {
    if (err) throw err;
    console.log("successfully deleted file");
  });


  const deletdatabase = await Wallpaper.deleteOne({ _id: wallpaperId });
 console.log(deletdatabase);
 res.send(deletdatabase);

});

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
