// import {mongoose} from "mongoose";
// import env from 'dotenv';

// const uri = env.config().parsed?.MONGODB_URI;
// await mongoose.connect(uri);
// console.log ("Connected to MongoDB Atlas from the index.js !");

// ============================ V2 =========================
// const mongoose = require('mongoose');
// const env = require('dotenv');

// const uri = env.config().parsed?.MONGODB_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   ssl: true,
//   sslValidate: false,  // Add this line to disable SSL validation
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB Atlas!');
// });

// mongoose.connection.on('error', (err) => {
//     console.log('Error connecting to MongoDB Atlas:', err);
//   });

  // ============================ V3 =========================

//  // import { connect, connection } from 'mongoose';
//  import pkg from 'mongoose';
// const { connect, connection } = pkg;
// import { config } from 'dotenv';

// config();

// const uri = config().parsed?.MONGODB_URI;

// connect(uri, { ssl: true }); // Removed deprecated options

// connection.on('connected', () => {
//   console.log('Connected to MongoDB Atlas!');
// });

// connection.on('error', (err) => {
//   console.log('Error connecting to MongoDB Atlas:', err);
// });

// ============================ V4 =========================
import mongoose from 'mongoose';
import { config } from 'dotenv';
//import { property } from 'lodash';

config();

const uri = config().parsed?.MONGODB_URI;

mongoose.connect(uri, { ssl: true })
  .then(() => console.log('Connected to MongoDB Atlas! The first note. '))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas!');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB Atlas:', err);
});

mongoose.connection.once('open', async () => {
  const RentSchema = new mongoose.Schema({
location: String,
suburb: String,
rentprice: Number,
bedrooms: Number,
propertytype: String,
  }, { strict: false });

  // Create a model from the schema
  const Rent = mongoose.model('Rent', RentSchema, 'rents');

  // Fetch data using the model
  try {
    const doc = await Rent.find({}).exec();
    console.log(doc);
  } catch (err) {
    console.error('Error fetching data from MongoDB:', err);
  }
});