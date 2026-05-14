import SystemSettings from '../models/settings.model.js';

export const getAdmissionStatus = async (req, res) => {
  try {
    let settings = await SystemSettings.findOne({ key: 'admission_status' });
    if (!settings) {
      settings = await SystemSettings.create({ key: 'admission_status' });
    }
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateAdmissionStatus = async (req, res) => {
  try {
    const { currentYear, isClosed } = req.body;
    const settings = await SystemSettings.findOneAndUpdate(
      { key: 'admission_status' },
      { $set: { currentYear, isClosed } },
      { new: true, upsert: true }
    );
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
