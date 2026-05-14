import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a university name'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Please add a country'],
    },
    feeStructure: {
      type: String,
      required: [true, 'Please add fee structure details'],
    },
    eligibility: {
      type: String,
      required: [true, 'Please add eligibility criteria'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const University = mongoose.model('University', universitySchema);

export default University;
