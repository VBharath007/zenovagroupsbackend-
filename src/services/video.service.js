import Video from '../models/video.model.js';

export const getAllVideos = async () => {
  return await Video.find().sort({ createdAt: -1 });
};

export const createVideo = async (data) => {
  const video = new Video(data);
  return await video.save();
};

export const updateVideo = async (id, data) => {
  return await Video.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteVideo = async (id) => {
  return await Video.findByIdAndDelete(id);
};
