import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Appointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!date || !time || !location) {
      alert("Please fill all details to book the slot");
      return;
    }

    alert(`Appointment Booked at ${location} for ${date} ✅`);
    navigate("/confirmation");
  };

  return (
    <div style={{ backgroundColor: "#f4f7f9", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar currentStep={5} />

      <div style={containerStyle}>
        <h2 style={{ color: "#003366", marginBottom: "10px" }}>Schedule Appointment</h2>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Select your nearest Passport Seva Kendra (PSK) and a convenient time slot.
        </p>

        {/* 1. Location Selection  */}
        <div style={inputGroup}>
          <label style={labelStyle}>Select Passport Office</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={inputStyle}
          >
            <option value="">-- Choose Center --</option>
            <option>PSK Delhi - RK Puram</option>
            <option>PSK Mumbai - Andheri</option>
            <option>PSK Bangalore - Lalbagh</option>
            <option>PSK Nagpur</option>
          </select>
        </div>

        {/* 2. Date Selection */}
        <div style={inputGroup}>
          <label style={labelStyle}>Select Date</label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]} // Disable past dates
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* 3. Time Slot Selection */}
        <div style={inputGroup}>
          <label style={labelStyle}>Available Time Slots</label>
          <div style={slotGrid}>
            {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((slot) => (
              <button
                key={slot}
                onClick={() => setTime(slot)}
                style={{
                  ...slotBtn,
                  backgroundColor: time === slot ? "#007bff" : "white",
                  color: time === slot ? "white" : "#333",
                  border: time === slot ? "1px solid #007bff" : "1px solid #ccc",
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button onClick={handleBooking} style={mainBtnStyle}>
          Confirm & Pay (Demo)
        </button>
        
        <p style={{ fontSize: "11px", marginTop: "15px", color: "#999" }}>
          Note: Please arrive 15 minutes before your scheduled time.
        </p>
      </div>
    </div>
  );
}

/* Styles */
const containerStyle = {
  maxWidth: "450px",
  margin: "40px auto",
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const inputGroup = { textAlign: "left", marginBottom: "20px" };
const labelStyle = { fontSize: "14px", fontWeight: "600", color: "#444", display: "block", marginBottom: "5px" };
const inputStyle = { width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc", outline: "none" };

const slotGrid = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "10px" };
const slotBtn = { padding: "10px", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: "500", transition: "0.2s" };

const mainBtnStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#003366",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "10px",
};