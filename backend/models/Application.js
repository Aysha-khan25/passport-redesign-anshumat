const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  // User identification
  email: { 
    type: String, 
    required: true, 
    unique: true // Ek user ki ek hi active application
  },
  
  // Step-wise data
  name: String,
  dob: String,
  city: String, // City missing thi
  address: String,
  
  // Document info
  documentType: { type: String, default: "Aadhar Card" },
  documentUrl: String, // File ka path ya name save karne ke liye
  
  // Appointment
  appointmentDate: String,
  appointmentTime: String,
  appointmentLocation: String,

 
  status: { 
    type: String, 
    enum: ["Draft", "Submitted", "Under Review", "Approved"],
    default: "Draft" 
  },

  currentStep: { type: Number, default: 1 }

}, { timestamps: true }); 
module.exports = mongoose.model("Application", appSchema);