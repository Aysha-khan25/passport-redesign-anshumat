import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  // Mock data
  const applications = [
    { 
      id: "APP74829", 
      type: "Fresh Passport", 
      status: "Under Review", 
      date: "24 Mar 2026",
      color: "#ffc107" 
    },
    { 
      id: "APP10293", 
      type: "Re-issue", 
      status: "Draft", 
      date: "20 Mar 2026",
      color: "#6c757d" 
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navbar />
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2>User Dashboard</h2>
          <button style={newAppBtn} onClick={() => navigate("/form")}>
            + New Application
          </button>
        </div>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          Welcome back! Track your passport application status below.
        </p>

        {/* Status Cards */}
        <div style={tableContainer}>
          <table style={tableStyle}>
            <thead>
              <tr style={headerRow}>
                <th style={thStyle}>Application ID</th>
                <th style={thStyle}>Service Type</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Last Updated</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} style={rowStyle}>
                  <td style={tdStyle}><strong>{app.id}</strong></td>
                  <td style={tdStyle}>{app.type}</td>
                  <td style={tdStyle}>
                    <span style={{ ...statusBadge, backgroundColor: app.color }}>
                      {app.status}
                    </span>
                  </td>
                  <td style={tdStyle}>{app.date}</td>
                  <td style={tdStyle}>
                    <button style={viewBtn} onClick={() => alert("Opening Application Details...")}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Help Section */}
        <div style={helpBox}>
          <h4>Need Help?</h4>
          <p style={{fontSize: "13px"}}>Check document requirements or contact support if your application is 'Under Review' for more than 7 days.</p>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const containerStyle = { maxWidth: "900px", margin: "40px auto", padding: "0 20px" };
const headerStyle = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" };
const newAppBtn = { padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" };
const tableContainer = { backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", overflow: "hidden" };
const tableStyle = { width: "100%", borderCollapse: "collapse" };
const headerRow = { backgroundColor: "#003366", color: "white", textAlign: "left" };
const thStyle = { padding: "15px" };
const tdStyle = { padding: "15px", borderBottom: "1px solid #eee" };
const rowStyle = { transition: "0.3s", cursor: "default" };
const statusBadge = { padding: "4px 10px", borderRadius: "20px", color: "white", fontSize: "12px", fontWeight: "bold" };
const viewBtn = { background: "none", border: "1px solid #007bff", color: "#007bff", padding: "5px 12px", borderRadius: "4px", cursor: "pointer" };
const helpBox = { marginTop: "30px", padding: "20px", backgroundColor: "#e9ecef", borderRadius: "8px", borderLeft: "5px solid #003366" };