const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// URL encode the password to handle special characters
const password = encodeURIComponent("@123barisH");

mongoose.connect(`mongodb+srv://sanjayasd45:${password}@datacluster.lgoji1f.mongodb.net/your_database?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB Atlas: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
