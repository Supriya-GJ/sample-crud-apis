const express = require('express');
const productRoute = require('./routes/product.route.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// A middlewear to convert the json
const app = express();
app.use(express.json());

// routes
app.use("/api/products", productRoute);
    

// Test APIs
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
 
app.get('/', (req, res) => {
    res.send('This is the response from a Node API which is updated');
})


// MongoDB connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB!');

  })
  .catch((err) => {
    console.error('Connection Failed!', err);
  });