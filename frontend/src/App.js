import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; 
import Home from "./pages/Home";
import Form from "./pages/Form";
import Upload from "./pages/Upload";
import Appointment from "./pages/Appointment";
import Confirmation from "./pages/Confirmation";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;