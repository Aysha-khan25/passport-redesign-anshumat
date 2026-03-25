import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Mandatory Check for Reviewers
    if (email === "hire-me@anshumat.org" && password === "HireMe@2025!") {
      alert("Login Successful ✅");
      navigate("/home"); 
    } else {
      alert("Invalid credentials. Please use the demo login provided below.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.loginCard}>
        <h2 style={styles.header}>Passport Portal Login</h2>
        <p style={styles.subText}>Sign in to manage your applications</p>

        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>

        <button onClick={handleLogin} style={styles.loginBtn}>
          Sign In
        </button>

        {/* Demo Login Box for Reviewers */}
        <div style={styles.demoBox}>
          <p style={styles.demoTitle}>📢 Reviewer Demo Login:</p>
          <p style={styles.demoText}><strong>Email:</strong> hire-me@anshumat.org</p>
          <p style={styles.demoText}><strong>Pass:</strong> HireMe@2025!</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  },
  loginCard: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  header: { color: "#003366", marginBottom: "5px" },
  subText: { color: "#666", fontSize: "14px", marginBottom: "25px" },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#003366",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  demoBox: {
    marginTop: "25px",
    padding: "15px",
    backgroundColor: "#fff3cd", 
    border: "1px solid #ffeeba",
    borderRadius: "8px",
    textAlign: "left",
  },
  demoTitle: { margin: "0 0 5px 0", fontSize: "13px", fontWeight: "bold", color: "#856404" },
  demoText: { margin: "2px 0", fontSize: "13px", color: "#856404" },
};