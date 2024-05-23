import {mongoose} from "mongoose";

const uri = process.env.MONGODB_URI;
await mongoose.connect(uri);
console.log ("Connected to MongoDB Atlas from the index.ls !");