const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['Patient', 'Doctor'] }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
