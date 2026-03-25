import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();

  const applicationId = "APP" + Math.floor(Math.random() * 100000);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "green" }}>Application Submitted ✅</h2>

      <p style={{ marginTop: "10px" }}>
        Your passport application has been successfully submitted.
      </p>

      {/* Application ID */}
      <div
        style={{
          margin: "15px 0",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        Application ID: {applicationId}
      </div>

      {/* Buttons */}
      <button
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Downloading receipt...")}
      >
        Download Receipt
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
}