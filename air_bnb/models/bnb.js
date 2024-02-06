const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
    img:{
        type: String,
        required:true
    }, 
    location:{
        type: String,
        required: true
    },
    elevation: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    d_or_n:{
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    wishlist: {
        type: Boolean,
        require: true
    }
})

const categoryShema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    }
})


const Listing = mongoose.model("Listing", listingSchema)
const Category = mongoose.model("Category", categoryShema);
module.exports = {Listing , Category};