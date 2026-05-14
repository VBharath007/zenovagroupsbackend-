import express from 'express';
import * as testimonialController from '../controllers/testimonial.controller.js';

import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.get('/', testimonialController.getTestimonials);
router.post('/', upload.any(), testimonialController.createTestimonial);
router.put('/:id', upload.any(), testimonialController.updateTestimonial);
router.delete('/:id', testimonialController.deleteTestimonial);

export default router;
