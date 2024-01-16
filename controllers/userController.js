import asyncHandler from '../middleware/asyncHandler.js';
import generateToken from '../utils/jwtToken.js';
import User from '../models/userModel.js';
// @desc   Authenticate the user and gets the token
// @route  POST /users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.passMatch(password))) {
    generateToken(res, user._id);

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
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already registered! try a different email');
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data! please try again!');
  }
});

// @desc   Logout user and clearing the http cookie
// @route  POST /users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: 'You have logged out!' });
});

// @desc   Get user profile
// @route  GET /users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found! please try again!');
  }
});

// @desc   Update user profile
// @route  PUT /users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUserData = await user.save();
    res.status(200).json({
      _id: updateUserData._id,
      name: updateUserData.name,
      email: updateUserData.email,
      isAdmin: updateUserData.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found! please try again!');
  }
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
