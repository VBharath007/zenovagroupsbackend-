import Testimonial from '../models/testimonial.model.js';

export const getAllTestimonials = async () => {
  return await Testimonial.find().sort({ createdAt: -1 });
};

export const createTestimonial = async (data) => {
  const testimonial = new Testimonial(data);
  return await testimonial.save();
};

export const updateTestimonial = async (id, data) => {
  return await Testimonial.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteTestimonial = async (id) => {
  return await Testimonial.findByIdAndDelete(id);
};
