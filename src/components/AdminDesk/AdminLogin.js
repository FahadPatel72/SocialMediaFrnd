import React, { useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("https://socialmediabackend-1-khue.onrender.com/api/admin/login", {
        username,
        password,
      });
      console.log(response);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        navigate("/admin/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      if (err.response) {
        console.error("Error response:", err.response.data);
        alert(err.response.data.message || "Error logging in");
      } else if (err.request) {
        console.error("Error request:", err.request);
        alert("No response received from server");
      } else {
        console.error("Error message:", err.message);
        alert("Error logging in: " + err.message);
      }
    }
  };

  return (
    <div className="admin-login-form">
      <fieldset className="admin-form">
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </fieldset>
    </div>
  );
};

export default AdminLogin;
