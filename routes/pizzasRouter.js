import express from 'express';
const router = express.Router();

import {
  getPizzas,
  addPizza,
  // getPizza,
  deletePizza,
  updatePizza
} from '../controllers/pizzasControllers.js';

router.route('/').get(getPizzas).post(addPizza);

router.route('/:id').delete(deletePizza).put(updatePizza);

export default router;