import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    default: 'MBBS'
  },
  university: {
    type: String,
    required: [true, 'University is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  feedback: {
    type: String,
    required: [true, 'Feedback is required']
  },
  photo: {
    type: String,
    required: [true, 'Photo is required']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5,
    default: 5
  },
  year: {
    type: String,
    required: [true, 'Year/Intake is required']
  },
  status: {
    type: String,
    enum: ['Verified', 'Pending'],
    default: 'Verified'
  },
  tags: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
