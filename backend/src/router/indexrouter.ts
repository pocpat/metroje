// import express from "express";
// import authentication from "./authrouter";
// import users from "./usersrouter";
// import rents from "./rentsrouter";

// const router = express.Router();

// export default (): express.Router => {
//   authentication(router);
//   users(router);
//   rents(router);

//   return router;
// };

import { Router } from 'express';
import { getRentsByQuery } from '../controllers/rentController';

const router = Router();

router.get('/rents/results', getRentsByQuery);

export default router;