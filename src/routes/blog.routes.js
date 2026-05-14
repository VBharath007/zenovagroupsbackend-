import express from 'express';
import {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blog.controller.js';

import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.route('/').get(getBlogs).post(upload.single('image'), createBlog);

router.route('/:id').get(getBlog).put(upload.single('image'), updateBlog).delete(deleteBlog);

export default router;
