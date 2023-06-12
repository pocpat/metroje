import { getAllRents, getFilteredRents } from "../controllers/rentController";
import express, { Request, Response, NextFunction } from "express";

export default (router: express.Router) => {
  router.get("/rents", getAllRents);
  router.get("/rents/results", getFilteredRents);
  router.post("/rents/results", getFilteredRents);
  router.get("/",  (req: Request, res: Response, next: NextFunction): void => {
    res.json({ message: "Hello! Catch-all route." });
  });
};
