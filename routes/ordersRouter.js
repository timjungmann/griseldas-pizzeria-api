import express from 'express';
const router = express.Router();

import { 
  getOrder,
  addOrder
} from '../controllers/ordersControllers.js';

router.route('/').post(addOrder);
router.route('/:id').get(getOrder);

export default router;