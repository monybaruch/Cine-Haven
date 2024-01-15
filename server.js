import { notFound, errorHandler } from './middleware/errorMiddlewere.js';
import bluraysRoutes from './routes/bluraysRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 3005;

connectDB(); // this will make the connection to mongodb

const app = express();

//middleware to parse the body that is send
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get('/', (req, res) => {
  res.send('working...');
});

app.use('/blurays', bluraysRoutes);
app.use('/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
