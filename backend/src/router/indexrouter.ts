import express from "express";
import authentication from "./authrouter";
import users from "./usersrouter";
import rents from "./rentsrouter";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  rents(router);

  return router;
};
