import express from 'express';
const router = express.Router();

import {
  getCartItems,
  changeQuantity
} from '../controllers/cartControllers.js';

router.route('/').get(getCartItems).put(changeQuantity);

export default router;