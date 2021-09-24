import express from 'express';
const router = express.Router();

import { 
  getOrder
} from '../controller/ordersControllers.js';

router.route('/:id').put(getOrder);