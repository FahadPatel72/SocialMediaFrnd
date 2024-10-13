import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../api";
import './AdminDesk.css';

const AdminDesk = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await API.get("https://socialmediabackend-1-khue.onrender.com/api/users/all", {
          headers: {
            'x-auth-token': token,
          },
        });
        console.log(response.data);
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard">
      <fieldset className="inpt-field">
      <h2>Admin Dashboard</h2>
      {console.log(users)} 
      {users.length > 0 ? (
        <ul className="utlist">
          {users.map((user) => (
            <li key={user._id}>
            <h3>{user.name} ({user.socialHandle})</h3>
            <div className="images">
              {user.images.map((image, index) => (
                <img 
                  key={index} 
                  src={`https://socialmediabackend-1-khue.onrender.com/uploads/${image}`} 
                  alt={user.name} 
                  onError={(e) => e.target.src = 'fallback_image_path.jpg'}   className="user-image"
                />
              ))}
            </div>
          </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
      </fieldset>
    </div>
  );
};

export default AdminDesk;