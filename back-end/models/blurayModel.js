const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timeseries: true,
  }
);

const bluraySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: [String], required: true, default: [] },
    director: { type: String, required: true },
    cast: { type: [String], required: true, default: [] },
    releaseYear: { type: Number, required: true, default: 0 },
    duration: { type: String, required: true },
    price: {
      type: {
        purchase: { type: Number, required: true, default: 0 },
        rental: {
          type: {
            oneWeek: { type: Number, required: true, default: 0 },
            twoWeeks: { type: Number, required: true, default: 0 },
            oneMonth: { type: Number, required: true, default: 0 },
          },
          required: true,
        },
      },
      required: true,
    },
    image: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    Reviews: [reviewSchema],
    numReviews: { type: Number, required: true, default: 0 },
    Rating: { type: Number, required: true, default: 0 },
  },
  {
    timeseries: true,
  }
);

const Bluray = mongoose.model('Bluray', bluraySchema);

export default Bluray;
