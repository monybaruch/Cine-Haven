import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import blurays from './data/blu-ray.js';
import User from './models/userModel.js';
import Bluray from './models/blurayModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const seedData = async () => {
  try {
    await Order.deleteMany();
    await Bluray.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleBlurays = blurays.map((bluray) => {
      return { ...bluray, user: adminUser };
    });

    await Bluray.insertMany(sampleBlurays);

    console.log('Data Seeded!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.insertMany);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Bluray.deleteMany();
    await User.deleteMany();

    console.log('Data Deleted!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.insertMany);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  seedData();
}
