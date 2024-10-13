import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Default.css';

export default function Default() {
   
    const navigate = useNavigate();

  return (
    <div className='default-route'>
        <h1>Welcome to the Home Page!</h1>
        <button onClick={()=>navigate("/admin-login")}>Go to Admin Panel</button>
        <button onClick={()=>navigate("/user")}>Go to User Panel</button>
    </div>
  )
}
