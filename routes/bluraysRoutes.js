import { getBlurayById, getBlurays } from '../controllers/blurayController.js';
import express from 'express';
const router = express.Router();

router.route('/').get(getBlurays);
router.route('/:id').get(getBlurayById);

export default router;
