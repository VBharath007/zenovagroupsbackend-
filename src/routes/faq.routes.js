import express from 'express';
import * as faqController from '../controllers/faq.controller.js';

const router = express.Router();

router.get('/', faqController.getFaqs);
router.get('/:id', faqController.getFaqById);
router.post('/', faqController.createFaq);
router.put('/:id', faqController.updateFaq);
router.delete('/:id', faqController.deleteFaq);

export default router;
