import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";

export default function Form() {
  const [step, setStep] = useState(1);
  const [savedTime, setSavedTime] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  // Expanded Data Structure 
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    city: "",
    address: "",
    documentType: "Aadhar Card",
    file: null,
    appointmentDate: "",
  });

  // Autosave Function 
  const saveData = async () => {
    setIsSaving(true);
    try {
      await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSavedTime(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Save failed", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Step Validation & Navigation 
  const nextStep = () => {
    if (step === 1 && !formData.name) return alert("Please enter your name");
    if (step === 2 && !formData.dob) return alert("Please select Date of Birth");
    if (step === 4 && !formData.file) return alert("Please upload a document");

    if (step < 6) {
      saveData(); // Save progress at every step 
      setStep(step + 1);
    } else {
      saveData();
      navigate("/confirmation"); 
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div style={{ backgroundColor: "#f4f7f9", minHeight: "100vh" }}>
      <Navbar currentStep={step} />
      
      <div style={containerStyle}>
        <h2 style={{ color: "#003366" }}>Passport Application</h2>
        
        {/* Progress Indicator */}
        <ProgressBar step={step} totalSteps={6} />
        <p style={{ fontWeight: "bold" }}>Step {step} of 6: {getStepTitle(step)}</p>

        <div style={formBoxStyle}>
          {/* Step 1: Personal Details  */}
          {step === 1 && (
            <div style={inputGroup}>
              <label>Full Name (as per documents)</label>
              <input
                style={inputStyle}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}

          {/* Step 2: DOB & City  */}
          {step === 2 && (
            <div style={inputGroup}>
              <label>Date of Birth</label>
              <input
                type="date"
                style={inputStyle}
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
              <label>City</label>
              <input
                style={inputStyle}
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
          )}

          {/* Step 3: Address Details */}
          {step === 3 && (
            <div style={inputGroup}>
              <label>Residential Address</label>
              <textarea
                style={{ ...inputStyle, height: "80px" }}
                placeholder="Enter full address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          )}

          {/* Step 4: Document Upload  */}
          {step === 4 && (
            <div style={inputGroup}>
              <label>Select Document Type</label>
              <select 
                style={inputStyle} 
                value={formData.documentType}
                onChange={(e) => setFormData({...formData, documentType: e.target.value})}
              >
                <option>Aadhar Card</option>
                <option>Voter ID</option>
                <option>PAN Card</option>
              </select>
              <label>Upload Scanned Copy (PDF/JPG)</label>
              <input 
                type="file" 
                style={inputStyle}
                onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
              />
            </div>
          )}

          {/* Step 5: Appointment Booking  */}
          {step === 5 && (
            <div style={inputGroup}>
              <label>Select Appointment Date</label>
              <input 
                type="datetime-local" 
                style={inputStyle}
                value={formData.appointmentDate}
                onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}
              />
              <p style={{fontSize: "12px", color: "#666"}}>Available slots are shown based on your city.</p>
            </div>
          )}

          {/* Step 6: Review Profile  */}
          {step === 6 && (
            <div style={{ textAlign: "left", fontSize: "14px" }}>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>DOB:</strong> {formData.dob}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Appointment:</strong> {formData.appointmentDate}</p>
              <p style={{ color: "green" }}>✔ Documents Ready for Verification</p>
            </div>
          )}
        </div>

        {/* Sync Status Indicator  */}
        <div style={{ margin: "10px 0", minHeight: "20px" }}>
          {isSaving ? (
            <span style={{ color: "#007bff", fontSize: "12px" }}>Saving progress...</span>
          ) : savedTime && (
            <span style={{ color: "gray", fontSize: "12px" }}>Draft saved at {savedTime}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button onClick={prevStep} disabled={step === 1} style={buttonStyleGray}>
            Back
          </button>
          <button onClick={nextStep} style={buttonStyleBlue}>
            {step === 6 ? "Confirm & Submit" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper for Titles
const getStepTitle = (s) => {
  const titles = ["Basic Info", "Personal Details", "Address", "Documents", "Appointment", "Review"];
  return titles[s - 1];
};

/* --- UI Styles  --- */
const containerStyle = {
  maxWidth: "500px",
  margin: "40px auto",
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const formBoxStyle = {
  marginTop: "20px",
  padding: "15px",
  border: "1px solid #eee",
  borderRadius: "8px",
  backgroundColor: "#fafafa"
};

const inputGroup = {
  textAlign: "left",
  marginBottom: "15px"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "5px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box"
};

const buttonStyleGray = {
  padding: "10px 25px",
  backgroundColor: "#e0e0e0",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const buttonStyleBlue = {
  padding: "10px 25px",
  backgroundColor: "#003366", 
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};