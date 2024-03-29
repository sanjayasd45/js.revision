const express = require('express');
const path = require('path')
const {Listing , Category} = require('./models/bnb.js')
const mongoose = require('mongoose')
const password = encodeURIComponent("@123railwaY");




const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname + "/views"))
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/bnb?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(4000 , (res) => {
      console.log("connected, port -> 4000");
    });
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB Atlas: ${err}`);
  });

  let newCategory = 'Top of the world';
  let listingData = null;
  let categoryData = null;
app.get('/', async (req, res) => {
  listingData = await Listing.find({category:newCategory});
  categoryData = await Category.find({});
  res.render('index.ejs', {listingData, categoryData});
});
app.get('/c/:_id',  async (req, res) => {
  let el =  await Category.findById(req.params._id);
  console.log(el);
  newCategory = el.tagline;
  res.redirect('/');
})

app.get('/show/:_id', async (req, res) => {
  try {
    const post = await Listing.findById(req.params._id);
    res.render('show.ejs',{post});
  } catch (error) {
    console.error('Error:', error);
  }
});