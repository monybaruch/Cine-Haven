import mongoose from 'mongoose';

const bluraySchema = new mongoose.Schema({
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
  price: { type: Number, required: true, default: 0 },
  image: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  Rating: { type: Number, required: true, default: 0 },
});

const Bluray = mongoose.model('Bluray', bluraySchema);

export default Bluray;
