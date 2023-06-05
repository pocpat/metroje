import express from "express";
import { getRents,
    deleteRent,
    createRent,
    getRentsByRentMax,
    getFilteredRents
  } from "../controllers/userController";
  export default (router: express.Router) => {
    router.get("/rents", getRents);
    router.post("/rents", createRent);
    router.delete("/rents/:id", deleteRent);
    router.get('/rents/rentmax', getRentsByRentMax);
    router.get('/rents/filter', getFilteredRents);
  };
  