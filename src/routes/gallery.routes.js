import express from 'express';
import * as galleryController from '../controllers/gallery.controller.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.get('/', galleryController.getGallery);
router.post('/', upload.single('image'), galleryController.createGalleryItem);
router.put('/:id', upload.single('image'), galleryController.updateGalleryItem);
router.delete('/:id', galleryController.deleteGalleryItem);

export default router;
