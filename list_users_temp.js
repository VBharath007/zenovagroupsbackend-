
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  securityQuestion: String,
  securityAnswer: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

async function listUsers() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected successfully!');

    const users = await User.find({}, 'name email phone role securityQuestion securityAnswer createdAt');
    
    console.log('\n--- REGISTERED USERS ---');
    if (users.length === 0) {
      console.log('No users found in database.');
    } else {
      users.forEach((user, index) => {
        console.log(`\nUser #${index + 1}:`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Role: ${user.role}`);
        console.log(`Question: ${user.securityQuestion}`);
        console.log(`Answer: ${user.securityAnswer}`);
        console.log(`Joined: ${user.createdAt}`);
      });
    }
    console.log('\n-----------------------\n');

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error fetching users:', error);
    process.exit(1);
  }
}

listUsers();
