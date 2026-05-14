import University from '../models/university.model.js';

export const getAllUniversities = async () => {
  return await University.find({});
};

export const getUniversityById = async (id) => {
  return await University.findById(id);
};

export const createUniversity = async (universityData) => {
  return await University.create(universityData);
};

export const updateUniversity = async (id, universityData) => {
  return await University.findByIdAndUpdate(id, universityData, {
    new: true,
    runValidators: true,
  });
};

export const deleteUniversity = async (id) => {
  return await University.findByIdAndDelete(id);
};
