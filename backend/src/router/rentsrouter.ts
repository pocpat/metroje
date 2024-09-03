import { 
 getAllRents, 
  getFilteredRents  } from "../controllers/rentController";
import express from "express";

export default (router: express.Router) => {
  
  router.get("/rents/results", getFilteredRents);
  router.post("/rents/results", getFilteredRents);
 router.get("/rents", getAllRents);
};
