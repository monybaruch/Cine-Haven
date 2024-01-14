import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc   Authenticate the user and gets the token
// @route  POST /users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  res.send('user authnticate');
});

// @desc   Register user
// @route  POST /users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  res.send('user register');
});

// @desc   Logout user and clearing the http cookie
// @route  POST /users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.send('user logout');
});

// @desc   Get user profile
// @route  GET /users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('user profile');
});

// @desc   Update user profile
// @route  PUT /users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user profile');
});

// @desc   Get users
// @route  Get /users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  res.send('get all users');
});

// @desc   Delete user
// @route  Delete /users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  res.send('delete user by id');
});

// @desc   Get user by there id
// @route  Get /users/:id
// @access Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  res.send('get user by its id');
});

// @desc   Update user
// @route  Put /users/:id
// @access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  res.send('update user data');
});

export {
  updateUser,
  getUserById,
  deleteUser,
  getUsers,
  getUserProfile,
  logoutUser,
  registerUser,
  loginUser,
  updateUserProfile,
};
