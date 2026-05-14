import Gallery from '../models/gallery.model.js';

export const getAllGalleryItems = async () => {
  return await Gallery.find().sort({ createdAt: -1 });
};

export const createGalleryItem = async (galleryData) => {
  const galleryItem = new Gallery(galleryData);
  return await galleryItem.save();
};

export const updateGalleryItem = async (id, updateData) => {
  return await Gallery.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
};

export const deleteGalleryItem = async (id) => {
  return await Gallery.findByIdAndDelete(id);
};
