import { admin, protectRoute } from '../middleware/authMiddlewere.js';
import {
  updateUser,
  getUserById,
  deleteUser,
  getUsers,
  getUserProfile,
  logoutUser,
  registerUser,
  loginUser,
  updateUserProfile,
} from '../controllers/userController.js';

import express from 'express';
const router = express.Router();

router.route('/').get(protectRoute, admin, getUsers).post(registerUser);
router.post('/logout', logoutUser);
router.post('/login', loginUser);
router.route('/profile').put(protectRoute, updateUserProfile).get(protectRoute, getUserProfile);
router
  .route('/:id')
  .get(protectRoute, admin, getUserById)
  .delete(protectRoute, admin, deleteUser)
  .put(protectRoute, admin, updateUser);

export default router;
