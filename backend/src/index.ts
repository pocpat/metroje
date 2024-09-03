
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/indexrouter";
import env from "dotenv";

env.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
	credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const method = req.method ?? 'UNKNOWN_METHOD';
  const path = req.path ?? 'UNKNOWN_PATH';
  
  console.log(`${method} ${path}`);
  next();
});

const server = http.createServer(app);

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  throw new Error("MONGO_URL environment variable is not defined");
}

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL, {
  ssl: true,
  sslValidate: true,
})
  .then(() => {
	console.log("Connected to MongoDB");
  })
  .catch((error: Error) => {
	console.error("Error connecting to MongoDB:", error);
	process.exit(1); // Exit the process with an error code
  });

mongoose.connection.on("error", (error: Error) => {
  console.error("MongoDB connection error:", error);
});

app.use("/", router());

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1); // Exit the process with an error code
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1); // Exit the process with an error code
});
