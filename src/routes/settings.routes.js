import express from 'express';
import { getAdmissionStatus, updateAdmissionStatus } from '../controllers/settings.controller.js';

const router = express.Router();

router.get('/admission-status', getAdmissionStatus);
router.put('/admission-status', updateAdmissionStatus);

export default router;
