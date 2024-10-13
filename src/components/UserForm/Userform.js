import React, { useState } from "react";
import axios from "axios";
import './Userform.css';

const Userform = () => {
  const [formData, setFormData] = useState({
    name: "",
    socialHandle: "",
    images: [],  
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
   
    const newFiles = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newFiles],  
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("socialHandle", formData.socialHandle);

   
    formData.images.forEach((file) => {
      form.append("images", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/upload",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data);
      alert("User submitted successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to submit user");
    }
  };

  return (
    <div className="myform">
      <fieldset className="input-form">
        <h2>User Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor='socialHandle'>Social Media Handle:</label>
          <input
            type="text"
            name="socialHandle"
            placeholder="Enter your social media handle"
            value={formData.socialHandle}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor='images'>Upload Images:</label>
          <input
            type="file"
            name="images"
            multiple  
            onChange={handleFileChange}
            accept="image/*" 
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Userform;
