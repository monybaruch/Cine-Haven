import { admin, protectRoute } from '../middleware/authMiddlewere.js';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';

import express from 'express';
const router = express.Router();

router.route('/').get(protectRoute, admin, getOrders).post(protectRoute, addOrderItems);

router.route('/mine').get(protectRoute, getMyOrders);

router.route('/:id').get(protectRoute, admin, getOrderById);

router.route('/:id/pay').put(protectRoute, updateOrderToPaid);

router.route('/:id/deliver').put(protectRoute, admin, updateOrderToDelivered);

export default router;
