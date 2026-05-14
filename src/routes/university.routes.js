import express from 'express';
import {
  getUniversities,
  getUniversity,
  createUniversity,
  updateUniversity,
  deleteUniversity,
} from '../controllers/university.controller.js';

import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.route('/').get(getUniversities).post(upload.any(), createUniversity);

router.route('/:id').get(getUniversity).put(upload.any(), updateUniversity).delete(deleteUniversity);

export default router;
