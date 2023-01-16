const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const multer = require('multer');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
require('./db/conn')
dotenv.config({ path: "./config.env" });

const wallpaperschema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    wallaperimage: {
        data:Buffer,
        contentType:String

    }


})

const wallpaper = mongoose.model('wals', wallpaperschema);
module.exports = wallpaper;

const PORT = process.env.PORT



const Storage = multer.diskStorage({
    destination: "uploads",
    filenme: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage:Storage
}).single('wallpaper')

app.post('/upload', (req, res) => {

    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const newwallpaper = new wallpaper({
                name: req.body.name,
                wallaperimage: {
                    data: req.file.filename,
                    contentType: "image/png"
                },
            });
            newwallpaper.save()
                .then(() => res.send("Uploaded Succesful"))
                .catch(err => console.log(err))
        }
    })
})


app.get('/wallpaper', async (req, res) => {

    const data = await wallpaper.find();
    console.log(data);
    res.send(data);

});

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})