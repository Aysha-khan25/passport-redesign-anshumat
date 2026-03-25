const express = require("express");
const router = express.Router();
const App = require("../models/Application");

// 1. Save or Update Form (Real Autosave Logic)
router.post("/save", async (req, res) => {
  try {
    const { email, ...formData } = req.body;
    const updatedData = await App.findOneAndUpdate(
      { email: email }, 
      { $set: formData }, 
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Data synced successfully",
      data: updatedData,
      savedAt: new Date().toLocaleTimeString()
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// 2. Get all applications for Dashboard
router.get("/", async (req, res) => {
  try {
    const data = await App.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

module.exports = router;