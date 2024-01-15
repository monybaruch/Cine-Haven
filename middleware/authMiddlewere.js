import asyncHandler from './asyncHandler';
import User from '../models/userModel';
import jwt from 'jsonwebtoken';

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;
  // read jwt token from the cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
      req.user = await User.findById(decode.UserId).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('You are not authorized! token failed!');
    }
  } else {
    res.status(401);
    throw new Error('You are not authorized! no token found!');
  }
});

// admin middleware

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('You are not authorized! only admin is authorized!');
  }
};

export { admin, protectRoute };
