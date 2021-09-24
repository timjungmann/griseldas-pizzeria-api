import express from 'express';
const router = express.Router();

import { 
  getOrder,
  addOrder
} from '../controllers/ordersControllers.js';

router.route('/:id').get(getOrder).post(addOrder);

export default router;