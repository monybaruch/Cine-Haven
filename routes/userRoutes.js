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

router.route('/').get(getUsers).post(registerUser);
router.post('/logout', logoutUser);
router.post('/login', loginUser);
router.route('/profile').put(updateUserProfile).get(getUserProfile);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);

export default router;
