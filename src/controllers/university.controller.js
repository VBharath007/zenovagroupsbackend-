import * as universityService from '../services/university.service.js';

// @desc    Get all universities
// @route   GET /api/universities
// @access  Public
export const getUniversities = async (req, res, next) => {
  try {
    const universities = await universityService.getAllUniversities();
    res.status(200).json({ success: true, count: universities.length, data: universities });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single university
// @route   GET /api/universities/:id
// @access  Public
export const getUniversity = async (req, res, next) => {
  try {
    const university = await universityService.getUniversityById(req.params.id);
    if (!university) {
      return res.status(404).json({ success: false, message: 'University not found' });
    }
    res.status(200).json({ success: true, data: university });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new university
// @route   POST /api/universities
// @access  Private (Admin)
export const createUniversity = async (req, res, next) => {
  try {
    const universityData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      universityData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.files && req.files.length > 0) {
      universityData.images = req.files.map(file => file.path);
    }
    
    const university = await universityService.createUniversity(universityData);
    res.status(201).json({ success: true, data: university });
  } catch (error) {
    next(error);
  }
};

// @desc    Update university
// @route   PUT /api/universities/:id
// @access  Private (Admin)
export const updateUniversity = async (req, res, next) => {
  try {
    const updateData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      updateData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map(file => file.path);
    }

    const university = await universityService.updateUniversity(req.params.id, updateData);
    if (!university) {
      return res.status(404).json({ success: false, message: 'University not found' });
    }
    res.status(200).json({ success: true, data: university });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete university
// @route   DELETE /api/universities/:id
// @access  Private (Admin)
export const deleteUniversity = async (req, res, next) => {
  try {
    const university = await universityService.deleteUniversity(req.params.id);
    if (!university) {
      return res.status(404).json({ success: false, message: 'University not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
