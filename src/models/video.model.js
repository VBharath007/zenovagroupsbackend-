import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  url: {
    type: String,
    required: [true, 'Video URL is required']
  },
  type: {
    type: String,
    enum: ['youtube', 'local'],
    default: 'youtube'
  },
  category: {
    type: String,
    enum: ['Student Experience', 'University Tour', 'Guidance', 'Campus'],
    required: [true, 'Category is required']
  },
  thumbnail: {
    type: String,
    required: [true, 'Thumbnail is required']
  },
  duration: {
    type: String,
    default: '0:00'
  },
  views: {
    type: String,
    default: '0'
  },
  uploadedAt: {
    type: String,
    default: new Date().toLocaleDateString()
  }
}, {
  timestamps: true
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
