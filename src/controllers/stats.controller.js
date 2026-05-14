import University from '../models/university.model.js';
import Blog from '../models/blog.model.js';
import FAQ from '../models/faq.model.js';
import Testimonial from '../models/testimonial.model.js';

export const getStats = async (req, res, next) => {
  try {
    const [universityCount, blogCount, faqCount, testimonialCount, countryStats] = await Promise.all([
      University.countDocuments(),
      Blog.countDocuments(),
      FAQ.countDocuments(),
      Testimonial.countDocuments(),
      University.aggregate([
        {
          $group: {
            _id: "$country",
            count: { $sum: 1 },
            universities: { $push: "$name" }
          }
        },
        {
          $project: {
            name: "$_id",
            count: 1,
            universities: { $slice: ["$universities", 5] },
            _id: 0
          }
        }
      ])
    ]);

    res.status(200).json({
      success: true,
      data: {
        universities: universityCount,
        blogs: blogCount,
        faqs: faqCount,
        testimonials: testimonialCount,
        countries: countryStats
      }
    });
  } catch (error) {
    next(error);
  }
};
