// import blurays from './data/blu-ray.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import bluraysRoutes from './routes/bluraysRoutes.js';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3005;

connectDB(); // this will make the connection to mongodb

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('working...');
});

app.use('/blurays', bluraysRoutes);

console.log(`Attempting to listen on port: ${PORT}`);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
