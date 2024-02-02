const express = require('express');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 3000;

// Replace 'your_connection_string' with the actual connection string from MongoDB Atlas
const mongoURI = 'your_connection_string';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Your Express app logic goes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
