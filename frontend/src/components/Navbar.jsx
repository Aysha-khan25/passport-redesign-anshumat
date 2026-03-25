import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar({ currentStep }) {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.topRow}>
        <div style={styles.logoGroup} onClick={() => navigate("/")}>
          <h2 style={styles.logo}>
            Anshumat <span style={styles.logoSub}>Passport Services</span>
          </h2>
        </div>

        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/dashboard" style={styles.link}>My Applications</Link>
          <button style={styles.logoutBtn} onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>

      <div style={styles.stepsRow}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} style={styles.stepWrapper}>
            <div 
              style={{
                ...styles.stepCircle,
                backgroundColor: currentStep >= num ? "#007bff" : "#555",
                border: currentStep === num ? "2px solid #fff" : "none",
                boxShadow: currentStep === num ? "0 0 8px #007bff" : "none"
              }}
            >
              {num}
            </div>
            <span style={{
              ...styles.stepLabel,
              color: currentStep >= num ? "#fff" : "#aaa",
              fontWeight: currentStep === num ? "bold" : "normal"
            }}>
              {getStepLabel(num)}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
}

const getStepLabel = (step) => {
  const labels = ["Bio", "Details", "Address", "Documents", "Booking", "Review"];
  return labels[step - 1];
};

const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    background: "#1a2a3a", 
    color: "#fff",
    padding: "10px 30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  logoGroup: {
    cursor: "pointer",
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    color: "#ffcc00", 
  },
  logoSub: {
    fontWeight: "300",
    fontSize: "14px",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px",
    transition: "0.3s",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #ff4444",
    color: "#ff4444",
    padding: "4px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
  },
  stepsRow: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "10px",
    borderTop: "1px solid #334455",
  },
  stepWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  stepCircle: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    transition: "all 0.4s ease",
  },
  stepLabel: {
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
};