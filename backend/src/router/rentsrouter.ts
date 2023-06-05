import { getAllRents, deleteRent, updateRent } from "controllers/rentController";
import express from "express";

export default (router: express.Router) => {
  router.get("/rents", getAllRents);
  router.delete("/rents/:id", deleteRent);
  router.patch("/rents/:id", updateRent);
};
