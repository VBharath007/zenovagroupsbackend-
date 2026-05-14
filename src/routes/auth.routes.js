import express from 'express';
import { register, login, forgotPassword, resetPassword, getSecurityQuestion, verifySecurityAnswer } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/get-security-question', getSecurityQuestion);
router.post('/verify-security-answer', verifySecurityAnswer);
router.put('/reset-password/:resetToken', resetPassword);

export default router;
