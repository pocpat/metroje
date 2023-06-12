import express, { Request, Response, NextFunction } from "express";
import {
  deleteUser,
  getAllUsers,
  updateUser,

} from "../controllers/userController";
// import { isAuthenticated, isOwner } from "../middlewares/indexmid";

export default (router: express.Router) => {
  // router.get("/users", isAuthenticated, getAllUsers);
  // router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  // router.patch("/users/:id", isAuthenticated, isOwner, updateUser);


  // prep for test case
  router.get("/users",  getAllUsers);
  router.delete("/users/:id", deleteUser);
  router.patch("/users/:id",updateUser);

  // router.get("/",  (req: Request, res: Response, next: NextFunction): void => {
  //   res.json({ message: "Hello! Catch-all route." });
  // });
};
