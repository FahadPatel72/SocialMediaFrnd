import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserForm from "../src/components/UserForm/Userform";
import AdminLogin from "../src/components/AdminDesk/AdminLogin";
import AdminDashboard from "../src/components/AdminDesk/AdminDesk";
import Navbar from "../src/components/Navbar/Navbar";
import Default from "./components/DefaultRoute/Default";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Default />} />

        <Route path="/user" element={<UserForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
