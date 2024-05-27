import {mongoose} from "mongoose";
import env from 'dotenv';

const uri = env.config().parsed?.MONGODB_URI;
await mongoose.connect(uri);
console.log ("Connected to MongoDB Atlas from the index.ls !");