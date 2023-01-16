const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const multer = require('multer');
const path = require('path');
    



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
require('./db/conn')
dotenv.config({ path: "./config.env" });

const wallpaperschema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    category: {
        type: String,
    },
    wallpaper_url: {
         type: String,
    }


})

const wallpaper = mongoose.model('wals', wallpaperschema);
module.exports = wallpaper;

const PORT = process.env.PORT



const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage:Storage
})


app.post("/upload", upload.single('wallpaper'), (req, res) => {

 

    const newwallpaper = new wallpaper({
        name: req.body.name,
        category: req.body.category,
        wallpaper_url:`${req.file.filename}`
    })
    newwallpaper.save()
        .then(() => res.send('uploaded'))
    .catch(err => console.log(err))
})





// app.post('/upload', (req, res) => {

//     upload(req, res, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             const newwallpaper = new wallpaper({
//                 name: req.body.name,
//                 wallaperimage: {
//                     data: req.file.filename,
//                     contentType: "image/png"
//                 },
//             });
//             newwallpaper.save()
//                 .then(() => res.send("Uploaded Succesful"))
//                 .catch(err => console.log(err))
//         }
//     })
// })


app.get('/wallpaper/:category', async (req, res) => {

    
    const data = await wallpaper.find({ category: req.params.category }, {});
    console.log(data);
    res.send(data);

});



app.post('/deleteall', async (req, res) => {

    const data = await wallpaper.deleteMany();
    console.log(data);
    res.send(data);

});

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})