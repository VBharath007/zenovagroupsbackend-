import mongoose from 'mongoose';

const systemSettingsSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    default: 'admission_status'
  },
  currentYear: {
    type: String,
    default: '2026-2027'
  },
  isClosed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const SystemSettings = mongoose.model('SystemSettings', systemSettingsSchema);

export default SystemSettings;
