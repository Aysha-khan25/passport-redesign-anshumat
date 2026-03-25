# 🌍 Passport Application Experience Redesign 

## 📌 Project Overview
This project is a full-stack web application designed to simplify the complex and often confusing passport application process. Following the **Anshumat Foundation** internship assignment, this redesign focuses on a guided, step-by-step user journey for first-time and non-tech-savvy users.

### 🔗 Live Demo Links
- **Frontend Repository:** [Link to your repo]
- **Backend Repository:** [Link to your repo]

---

## 🔍 Problem Understanding
Traditional government portals often suffer from:
- **Overwhelming Forms:** Long, single-page forms cause high drop-off rates.
- **Unclear Guidance:** Users get confused about document requirements.
- **Lack of Feedback:** No clear status on whether progress is being saved.

**Our Solution:** A structured 6-step flow with real-time progress tracking and automated data persistence.

---

## 🧭 User Flow & Information Architecture
The application follows a logical sequence to reduce cognitive load:
1. **Login:** Secure access with demo credentials.
2. **Home/Landing:** Clear call-to-action to "Start Application."
3. **Multi-Step Form:** - Bio-Data → Personal Details → Address Verification.
4. **Document Upload:** Specific category-based file selection.
5. **Appointment Booking:** Real-time slot selection at various PSK centers.
6. **Confirmation:** Instant Application ID generation and receipt download.
7. **Dashboard:** Post-submission tracking.



---

## 🚀 Key Features
- **Guided Navigation:** Uses a **Progress Bar** and **Step-Indicators** to keep users informed.
- **Autosave & Sync:** Implemented a "Last Saved" timestamp feature to build user trust and prevent data loss.
- **Smart Appointment Slots:** Interactive grid for choosing interview timings at Passport Seva Kendras.
- **Document Management:** Clear instructions on file formats (PDF/JPG) and types.
- **Status Tracking:** A dashboard to view the status of multiple applications (Draft vs. Submitted).

---

## 🔑 Mandatory Demo Login (For Reviewers)
Use the following credentials to explore the full application flow:
- **Email:** `hire-me@anshumat.org`
- **Password:** `HireMe@2025!`

---

## 🛠️ Tech Stack
- **Frontend:** React.js (Hooks, Context API, React Router)
- **Backend:** Node.js & Express.js
- **Database:** MongoDB (Mongoose) for structured application storage
- **Styling:** Custom CSS-in-JS for a clean, trustworthy "Gov-Tech" aesthetic

---

## 📂 Project Structure
```text
/root
├── /backend
│   ├── /models      # Database Schemas (User, Application)
│   ├── /routes      # API Endpoints (/save, /upload, /login)
│   └── index.js     # Server Entry Point
└── /frontend
    ├── /src
    │   ├── /components  # Navbar, ProgressBar
    │   └── /pages       # Login, Home, Form, Upload, Appointment, Dashboard
    └── package.json

###  Design Decisions (Product Thinking)
Modular Forms: Instead of 50 fields at once, we show 5-6 fields per step to keep users engaged.

Trust Indicators: The "Draft Saved" message specifically addresses the anxiety users feel during long government applications.

Visual Hierarchy: Important buttons (Next/Submit) are highlighted in "Trust Blue" to guide the user's eye.    

⚙️ How to Run
Backend:

Bash
cd backend
npm install
node index.js
Frontend:

Bash
cd frontend
npm install
npm start


👩‍💻 Author
Aysha Khan Aspiring Web Designer & Full-Stack Developer