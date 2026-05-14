import express from 'express';
import * as videoController from '../controllers/video.controller.js';

import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.get('/', videoController.getVideos);
router.post('/', upload.any(), videoController.createVideo);
router.put('/:id', upload.any(), videoController.updateVideo);
router.delete('/:id', videoController.deleteVideo);

export default router;
