import asyncHandler from '../middleware/asyncHandler.js';
import Bluray from '../models/blurayModel.js';
import express from 'express';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const blurays = await Bluray.find({});
    res.json(blurays);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const bluray = await Bluray.findById(req.params.id);

    if (bluray) {
      return res.json(bluray);
    } else {
      res.status(404);
      throw new Error('Resource not found!');
    }
  })
);

export default router;
