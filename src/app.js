import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import universityRoutes from './routes/university.routes.js';
import blogRoutes from './routes/blog.routes.js';
import galleryRoutes from './routes/gallery.routes.js';
import testimonialRoutes from './routes/testimonial.routes.js';
import faqRoutes from './routes/faq.routes.js';
import videoRoutes from './routes/video.routes.js';
import statsRoutes from './routes/stats.routes.js';
import settingsRoutes from './routes/settings.routes.js';
import authRoutes from './routes/auth.routes.js';
import errorMiddleware from './middleware/error.middleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/universities', universityRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/auth', authRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running smoothly' });
});

// Error handling middleware
app.use(errorMiddleware);

export default app;
