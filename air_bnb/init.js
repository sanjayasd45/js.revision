const mongoose = require('mongoose')
const {Listing , Cotegory} = require('./models/bnb.js')
const password = encodeURIComponent("@123barisH");

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/bnb?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB Atlas: ${err}`);
  });

// const listingData = ([
//     {
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     },{
//         img: 'https://img.freepik.com/free-vector/decorative-golden-mandala-red-background_1035-25425.jpg?w=826&t=st=1707229133~exp=1707229733~hmac=99c06f2e40a00ce6737fbe8e9aa3969ac12ddbf2208a6608a910b765c8005c9a',
//         location: 'New yark',
//         elevation: 5000,
//         date: '10-12 jan',
//         price: 5000,
//         d_or_n: 'night',
//         rating: 4.5,
//         wishlish: false
//     }
// ])

// Listing.insertMany(listingData)
Listing.find({})