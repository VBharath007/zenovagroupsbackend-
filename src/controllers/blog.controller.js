import * as blogService from '../services/blog.service.js';

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    next(error);
  }
};

export const getBlog = async (req, res, next) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const blogData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      blogData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.file) {
      blogData.image = req.file.path;
    }
    const blog = await blogService.createBlog(blogData);
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const updateData = {};
    Object.keys(req.body).forEach(key => {
      const cleanKey = key.trim();
      const value = req.body[key];
      updateData[cleanKey] = typeof value === 'string' ? value.trim() : value;
    });

    if (req.file) {
      updateData.image = req.file.path;
    }
    const blog = await blogService.updateBlog(req.params.id, updateData);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await blogService.deleteBlog(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
