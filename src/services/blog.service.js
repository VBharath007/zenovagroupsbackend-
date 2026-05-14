import Blog from '../models/blog.model.js';

export const getAllBlogs = async () => {
  return await Blog.find({}).sort({ createdAt: -1 });
};

export const getBlogById = async (id) => {
  return await Blog.findById(id);
};

export const createBlog = async (blogData) => {
  return await Blog.create(blogData);
};

export const updateBlog = async (id, blogData) => {
  return await Blog.findByIdAndUpdate(id, blogData, {
    new: true,
    runValidators: true,
  });
};

export const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};
