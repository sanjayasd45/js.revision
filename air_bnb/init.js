const mongoose = require('mongoose')
const {Listing , Category} = require('./models/bnb.js')
const password = encodeURIComponent("@123barisH");
const express = require('express')


const app = express()

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/bnb?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB Atlas: ${err}`);
  });


async function finder() {
  try{
    // await Listing.deleteMany({}, { bufferTimeoutMS: 30000 });
    let data = await Listing.find({})
    // await Listing.insertMany(data).then( () => {
    //   console.log('Done');
    // })
    // let data = await Category.find({})
    console.log(data);

    // console.log(data);
  }catch(e){
    console.log(e);
  }
  
}
app.get(('/'), (req, res) => {
  res.send('hi its me')
})

app.listen(5000, (e) => {
  console.log('done');
})

finder()

