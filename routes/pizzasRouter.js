import express from 'express';
const router = express.Router();

import {
  getPizzas,
  addPizza,
  getPizza,
  deletePizza,
  updatePizza
} from '../controllers/pizzasControllers.js';

router.route('/').get(getPizzas).post(addPizza);

router.route('/:id').get(getPizza).delete(deletePizza).put(updatePizza);