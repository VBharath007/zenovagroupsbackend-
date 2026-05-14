import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './src/models/user.model.js';

dotenv.config();

const seedAdmins = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Delete existing admins to avoid duplicates
    await User.deleteMany({ email: { $in: ['admin@zenova.com', 'admin1@zenova.com'] } });

    const admins = [
      {
        name: 'Admin',
        email: 'admin@zenova.com',
        phone: '9003584191',
        password: 'admin123',
        role: 'Admin',
        securityQuestion: 'What is your favorite color?',
        securityAnswer: 'blue'
      },
      {
        name: 'Sub-Admin',
        email: 'admin1@zenova.com',
        phone: '9003584191',
        password: 'admin1123',
        role: 'Sub-Admin',
        securityQuestion: 'What is your favorite color?',
        securityAnswer: 'blue'
      }
    ];

    for (const adminData of admins) {
      await User.create(adminData);
      console.log(`Admin created: ${adminData.email}`);
    }

    console.log('Seeding completed successfully!');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedAdmins();
