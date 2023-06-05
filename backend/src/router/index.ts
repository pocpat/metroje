import express from "express";
import authentication from "./authentication";
import users from "./users";
import rents from "./rents";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  // ====================>  rents by EK <====================
  rents(router);
  // ============================================================
  return router;
};
