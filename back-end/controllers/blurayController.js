import asyncHandler from '../middleware/asyncHandler.js';
import Bluray from '../models/blurayModel.js';

// @desc   GET all blurays
// @route  GET /blurays
// @access Public

const getBlurays = asyncHandler(async (req, res) => {
  const blurays = await Bluray.find({});
  res.json(blurays);
});

// @desc   GET all blurays
// @route  GET /blurays/:id
// @access Public

const getBlurayById = asyncHandler(async (req, res) => {
  const bluray = await Bluray.findById(req.params.id);

  if (bluray) {
    return res.json(bluray);
  } else {
    res.status(404);
    throw new Error('Resource not found!');
  }
});

export { getBlurays, getBlurayById };
