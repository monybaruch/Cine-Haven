import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN, { expiresIn: '15d' });

  //set jwt as http only cookie

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 15 * 24 * 60 * 60 * 1000, // convert it to 15 days
  });
};

export default generateToken;
