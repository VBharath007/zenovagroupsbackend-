import FAQ from '../models/faq.model.js';

export const getAllFaqs = async () => {
  return await FAQ.find().sort({ createdAt: -1 });
};

export const getFaqById = async (id) => {
  return await FAQ.findById(id);
};

export const createFaq = async (data) => {
  const faq = new FAQ(data);
  return await faq.save();
};

export const updateFaq = async (id, data) => {
  return await FAQ.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteFaq = async (id) => {
  return await FAQ.findByIdAndDelete(id);
};
