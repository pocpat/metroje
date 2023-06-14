import http from 'http';
import env from 'dotenv';
import app from './app';

env.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});



// import express from "express";
// import http from "http";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import compression from "compression";
// import cors from "cors";
// import mongoose from "mongoose";
// import router from "./router/indexrouter";
// import env from "dotenv";

// env.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(
//   cors({
//     credentials: true,
//   })
// );

// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

// const server = http.createServer(app);

// const MONGO_URL = process.env.MONGO_URL !== undefined ? process.env.MONGO_URL : "";

// // mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
// mongoose.connection.on("error", (error: Error) => console.log(error));

// app.use("/", router());

// server.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}/`);
// });
