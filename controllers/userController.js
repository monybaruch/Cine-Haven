import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
// @desc   Authenticate the user and gets the token
// @route  POST /users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.passMatch(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: '15d' });

    //set jwt as http only cookie

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 15 * 24 * 60 * 60 * 1000, // convert it to 15 days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password! please try again!');
  }
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
