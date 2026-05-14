import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Please add an excerpt'],
    },
    content: {
      type: String,
      required: [true, 'Please add content'],
    },
    image: {
      type: String,
      required: [true, 'Please add an image'],
    },
    category: {
      type: String,
      enum: ['NEET', 'MBBS', 'Life', 'General'],
      default: 'General',
    },
    tags: {
      type: [String],
      default: [],
    },
    publishDate: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      default: 'Admin',
    },
    theme: {
      type: String,
      enum: ['dark', 'light'],
      default: 'dark',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
