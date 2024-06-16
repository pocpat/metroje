// import {mongoose} from "mongoose";
// import env from 'dotenv';

// const uri = env.config().parsed?.MONGODB_URI;
// await mongoose.connect(uri);
// console.log ("Connected to MongoDB Atlas from the index.js !");

// ============================ mongoose  V2 =========================
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

  // ============================ mongoose V3 =========================

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

// ============================ mongoose V4 =========================
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

// ============================ mongoDB Atlas V5 =========================
import { MongoClient, ServerApiVersion } from 'mongodb';
import env from 'dotenv';

// const uri = env.config().parsed?.MONGODB_URI ;
console.log("uri: ", uri);
  //'mongodb+srv://elenamongodb:<password>@cluster0.og4lx1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to the server');
  
    // Send a ping to confirm a successful connection
    await client.db('metroje').command({ ping: 1 });
    console.log('Pinged the deployment');
  
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  
    // Fetch all documents from a specific collection
    const collection = client.db("metroje").collection("rents");
    const docs = await collection.find({}).toArray();
    console.log(docs);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

