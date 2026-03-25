import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [docType, setDocType] = useState("Aadhar Card");
  const navigate = useNavigate();

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to continue");
      return;
    }
    // Success feedback
    alert(`${docType} Uploaded Successfully ✅`);
    navigate("/appointment");
  };

  return (
    <div style={{ backgroundColor: "#f4f7f9", minHeight: "100vh" }}>
      <Navbar currentStep={4} />

      <div style={containerStyle}>
        <h2 style={{ color: "#003366" }}>Document Verification</h2>
        <p style={subTextStyle}>Step 4 of 6: Upload your proof of identity</p>

        {/* Instruction Box */}
        <div style={infoBox}>
          <p style={{ margin: 0, fontSize: "13px" }}>
            <strong>Note:</strong> File must be in PDF or JPG format (Max 2MB).
          </p>
        </div>

        <div style={{ textAlign: "left", marginBottom: "15px" }}>
          <label style={labelStyle}>Select Document Type</label>
          <select 
            style={inputStyle}
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
          >
            <option>Aadhar Card</option>
            <option>Voter ID</option>
            <option>PAN Card</option>
            <option>Driving License</option>
          </select>
        </div>

        <div style={uploadArea}>
          <input
            type="file"
            accept=".pdf, .jpg, .jpeg"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginBottom: "10px" }}
          />
          {file && (
            <p style={{ fontSize: "12px", color: "#28a745", fontWeight: "bold" }}>
              📄 Ready: {file.name}
            </p>
          )}
        </div>

        <button onClick={handleUpload} style={mainBtn}>
          Upload & Next Step
        </button>
        
        <button 
          onClick={() => navigate("/form")} 
          style={{ background: "none", border: "none", color: "#666", cursor: "pointer", marginTop: "15px" }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

/* UI Styles */
const containerStyle = {
  maxWidth: "450px",
  margin: "50px auto",
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const subTextStyle = { color: "#666", fontSize: "14px", marginBottom: "20px" };

const infoBox = {
  backgroundColor: "#e7f3ff",
  padding: "10px",
  borderRadius: "6px",
  color: "#0056b3",
  marginBottom: "20px",
  border: "1px solid #b8daff"
};

const labelStyle = { fontSize: "13px", fontWeight: "bold", color: "#333" };

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const uploadArea = {
  padding: "20px",
  border: "2px dashed #ddd",
  borderRadius: "10px",
  backgroundColor: "#fafafa",
  marginBottom: "20px"
};

const mainBtn = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#003366",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};