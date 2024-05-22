const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    availability: { type: String, required: true },
    chamberAddress: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    degree: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
