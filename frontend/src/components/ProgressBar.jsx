import React from "react";

export default function ProgressBar({ step, totalSteps }) {
  const percentage = (step / totalSteps) * 100;

  return (
    <div style={styles.wrapper}>
      <div style={styles.textContainer}>
        <span style={styles.percentageText}>{Math.round(percentage)}% Completed</span>
        <span style={styles.stepText}>Step {step} of {totalSteps}</span>
      </div>
      
      <div style={styles.container}>
        <div 
          style={{ 
            ...styles.bar, 
            width: `${percentage}%`,
            backgroundColor: step === totalSteps ? "#28a745" : "#007bff" 
          }}
        ></div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "20px 0",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#555",
  },
  container: {
    width: "100%",
    height: "8px",
    background: "#e0e0e0",
    borderRadius: "10px",
    overflow: "hidden", 
  },
  bar: {
    height: "100%",
    borderRadius: "10px 0 0 10px",
    transition: "width 0.5s ease-in-out", 
  },
  percentageText: {
    color: "#007bff",
  },
  stepText: {
    color: "#666",
  }
};