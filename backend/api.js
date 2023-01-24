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
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.urlencoded());
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

        res.send("user error");
        


      } else {
         
        res.send({
          message: "user login sucesss",
          token:token
        });

      }
    } else {
      res.send("Invalid Credentials");
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

app.listen(PORT, () => {
  console.log(`server is runnig at port no ${PORT}`);
});
