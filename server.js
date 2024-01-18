import { notFound, errorHandler } from './middleware/errorMiddlewere.js';
import bluraysRoutes from './routes/bluraysRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
dotenv.config();

const PORT = process.env.PORT || 3005;

connectDB(); // this will make the connection to mongodb

const app = express();
//middleware to parses the cookie
app.use(cookieParser());

//middleware to parse the body that is send
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev logging middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: process.env.FRONT_END_URL, // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use('/blurays', bluraysRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
