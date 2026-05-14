import * as galleryService from '../services/gallery.service.js';

export const getGallery = async (req, res, next) => {
  try {
    const items = await galleryService.getAllGalleryItems();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

export const createGalleryItem = async (req, res, next) => {
  try {
    // Clean data: remove extra spaces from keys and values
    const galleryData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      galleryData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.file) {
      galleryData.image = req.file.path;
    }
    
    const item = await galleryService.createGalleryItem(galleryData);
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const updateGalleryItem = async (req, res, next) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.path;
    }
    const item = await galleryService.updateGalleryItem(req.params.id, updateData);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const deleteGalleryItem = async (req, res, next) => {
  try {
    const item = await galleryService.deleteGalleryItem(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
