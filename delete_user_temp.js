
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const userSchema = new mongoose.Schema({
  email: String
});

const User = mongoose.model('User', userSchema);

async function deleteUser() {
  const emailToDelete = 'srijayasuriya024@gmail.com';
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected successfully!');

    const result = await User.deleteOne({ email: emailToDelete });
    
    if (result.deletedCount === 1) {
      console.log(`\nSUCCESS: User with email "${emailToDelete}" has been deleted.`);
    } else {
      console.log(`\nWARNING: No user found with email "${emailToDelete}". Nothing deleted.`);
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error deleting user:', error);
    process.exit(1);
  }
}

deleteUser();
