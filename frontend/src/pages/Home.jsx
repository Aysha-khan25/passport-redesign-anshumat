import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar currentStep={0} />

      <div style={styles.heroSection}>
        <div style={styles.card}>
          <h1 style={styles.title}>Passport Services Redefined</h1>
          <p style={styles.subtitle}>
            Experience a clean, guided, and hassle-free application journey.
          </p>

          {/* Quick Guide to reduce user confusion */}
          <div style={styles.stepsInfo}>
            <h4 style={{ marginBottom: "10px", color: "#333" }}>Simple 3-Step Process:</h4>
            <div style={styles.stepItem}>1. Fill Basic Details & Address</div>
            <div style={styles.stepItem}>2. Upload Required Documents</div>
            <div style={styles.stepItem}>3. Schedule Your Appointment</div>
          </div>

          <button onClick={() => navigate("/form")} style={styles.mainBtn}>
            Start New Application
          </button>
          
          <div style={styles.secondaryActions}>
            <button onClick={() => navigate("/dashboard")} style={styles.linkBtn}>
              Check Application Status
            </button>
          </div>
        </div>
      </div>

      {/* Footer / Trust Badge */}
      <div style={styles.trustFooter}>
        <p>Anshumat Foundation • Official Internship Assignment 2026</p>
      </div>
    </div>
  );
}

const styles = {
  heroSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  title: { fontSize: "28px", color: "#003366", marginBottom: "10px" },
  subtitle: { color: "#666", fontSize: "16px", marginBottom: "30px" },
  stepsInfo: {
    backgroundColor: "#f0f7ff",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "30px",
    textAlign: "left",
  },
  stepItem: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
    paddingLeft: "20px",
    position: "relative",
  },
  mainBtn: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
  secondaryActions: {
    marginTop: "20px",
    borderTop: "1px solid #eee",
    paddingTop: "15px",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "14px",
  },
  trustFooter: {
    textAlign: "center",
    marginTop: "40px",
    color: "#999",
    fontSize: "12px",
  }
};