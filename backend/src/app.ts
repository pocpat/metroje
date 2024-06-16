

// import router from './router/indexrouter';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import compression from 'compression';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import express from 'express';

// dotenv.config();

// const app = express();

// app.use(
//   cors({
//     credentials: true,
//   })
// );

// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

// app.use('/', router());

// const MONGO_URL = process.env.MONGO_URL;

// mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
// mongoose.connection.on('error', (error: Error) => console.log("Elena error: " + error));
// mongoose.connection.on('connection', ()=>{console.log("connected from app.ts")})

// export default app;

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './router/indexrouter';

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const MONGO_URL = process.env.MONGO_URL;
console.log("MONGO_URL: " + MONGO_URL);

if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in .env file");
  process.exit(1);
}

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL); 

mongoose.connection.on('error', (error: Error) => {
  console.error("Elena error: " + error);
  process.exit(1); // Exit process if there's a connection error
});

mongoose.connection.once('open', () => {
  console.log("connected from app.ts");
});

app.use('/', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

export default app;


