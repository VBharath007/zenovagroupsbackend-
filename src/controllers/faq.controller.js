import * as faqService from '../services/faq.service.js';

export const getFaqs = async (req, res, next) => {
  try {
    const items = await faqService.getAllFaqs();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

export const getFaqById = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const item = await faqService.getFaqById(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'FAQ not found' });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};


export const createFaq = async (req, res, next) => {
  try {
    const item = await faqService.createFaq(req.body);
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const updateFaq = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const item = await faqService.updateFaq(id, req.body);
    if (!item) {
      return res.status(404).json({ success: false, message: 'FAQ not found' });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFaq = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const item = await faqService.deleteFaq(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'FAQ not found' });
    }
    res.status(200).json({
      success: true,
      message: 'FAQ deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
