import { getAllRents, getFilteredRents } from "../controllers/rentController";
import express from "express";

export default (router: express.Router) => {
  router.get("/rents", getAllRents);
  router.post("/rents/results", getFilteredRents);
};

