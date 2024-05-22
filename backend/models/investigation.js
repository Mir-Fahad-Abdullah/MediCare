const mongoose = require('mongoose'); 

 

const investigationSchema = new mongoose.Schema({ 

    testName: { type: String, required: true }, 

    hospitalName: { type: String, required: true }, 

    price: { type: Number, required: true } 

}, { timestamps: true }); 

 

module.exports = mongoose.model('Investigation', investigationSchema); 