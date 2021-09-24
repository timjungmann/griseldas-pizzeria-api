import express from 'express';
const router = express.Router();

import {
  getCartItems,
  addOrder,
  clearCart
} from '../controllers/cartControllers.js';

router.route('/').get(getCartItems).post(addOrder).delete(clearCart);