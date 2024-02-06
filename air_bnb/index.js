const express = require('express');
const path = require('path')
const {Listing , Category} = require('./models/bnb.js')


const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname + "/views"))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.listen(4000 , (res) => {
    console.log("connected to the server at port 4000");
})