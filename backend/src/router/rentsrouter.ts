import { getAllRents, getRentsByQuery } from '../controllers/rentController';
import express from 'express';

export default (router: express.Router) => {
  router.get('/rents', getAllRents);
  //router.get('/rents/results', getRentsByQuery);
  //router.post('/rents/results', getRentsByQuery);
};
