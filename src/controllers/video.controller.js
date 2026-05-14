import * as videoService from '../services/video.service.js';

export const getVideos = async (req, res, next) => {
  try {
    const items = await videoService.getAllVideos();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

export const createVideo = async (req, res, next) => {
  try {
    const videoData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      videoData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.files && req.files.length > 0) {
      const thumbFile = req.files.find(f => f.fieldname.trim() === 'thumbnail');
      const videoFile = req.files.find(f => f.fieldname.trim() === 'video');
      
      if (thumbFile) {
        videoData.thumbnail = thumbFile.path;
      }
      if (videoFile) {
        videoData.url = videoFile.path;
        videoData.type = 'local';
      }
    }

    const item = await videoService.createVideo(videoData);
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const updateData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      updateData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.files && req.files.length > 0) {
      const thumbFile = req.files.find(f => f.fieldname.trim() === 'thumbnail');
      const videoFile = req.files.find(f => f.fieldname.trim() === 'video');
      
      if (thumbFile) {
        updateData.thumbnail = thumbFile.path;
      }
      if (videoFile) {
        updateData.url = videoFile.path;
        updateData.type = 'local';
      }
    }

    const item = await videoService.updateVideo(id, updateData);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const id = req.params.id.trim();
    const item = await videoService.deleteVideo(id);
    if (!item) {
      return res.status(404).json({ success: false, message: 'Video not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Video deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
