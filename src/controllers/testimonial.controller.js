import * as testimonialService from '../services/testimonial.service.js';

export const getTestimonials = async (req, res, next) => {
  try {
    const items = await testimonialService.getAllTestimonials();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (req, res, next) => {
  try {
    const body = req.body || {};
    const testimonialData = {};
    Object.keys(body).forEach(key => {
      const cleanKey = key.trim();
      const value = body[key];
      testimonialData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.file) {
      testimonialData.photo = req.file.path;
    } else if (req.files && req.files.length > 0) {
      // Find the file with fieldname 'photo'
      const photoFile = req.files.find(f => f.fieldname.trim() === 'photo');
      if (photoFile) testimonialData.photo = photoFile.path;
    }

    const item = await testimonialService.createTestimonial(testimonialData);
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const body = req.body || {};
    const updateData = {};
    Object.keys(body).forEach(key => {
      const cleanKey = key.trim();
      const value = body[key];
      updateData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.file) {
      updateData.photo = req.file.path;
    }

    const item = await testimonialService.updateTestimonial(id, updateData);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const item = await testimonialService.deleteTestimonial(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
