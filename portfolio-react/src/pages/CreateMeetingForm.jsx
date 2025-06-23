import React, { useState } from "react";
import axios from "axios";
import { FaCalendarAlt } from 'react-icons/fa';
import '../styles/Calendar.css';

const CreateMeetingForm = () => {
  const [formData, setFormData] = useState({
    
    title: "",
    meetingDate: "",
    meetingTime: "",
    level: "",
    email: "",
    description: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const apiUrl = "http://localhost:9091/api/meetings/create";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post(apiUrl, null, {
        params: formData,
      });

      if (response.status === 200) {
        setSuccessMsg("Meeting created successfully!");
        setFormData({
           
          title: "",
          meetingDate: "",
          meetingTime: "",
          level: "",
          email: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error creating meeting:", error);
      setErrorMsg("Failed to create meeting.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center ">
        <div className="col-6 ">
<h3>Create Meeting</h3>
<h2><FaCalendarAlt /></h2>


      {successMsg && <div className="alert alert-success">{successMsg}</div>}
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>
<div className="row mb-3">
<div className="form-group">
          <label>Date:</label>
          <input type="date" className="form-control" name="meetingDate" value={formData.meetingDate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Time:</label>
          
          <input type="time" className="form-control" name="meetingTime" value={formData.meetingTime} onChange={handleChange} required />
        </div>
</div>
        

        <div className="form-group">
          <label>Level:</label>
         
          <input type="text" className="form-control" name="level" value={formData.level} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Create Meeting
        </button>
      </form>
    </div>
        </div>
      
  );
};

export default CreateMeetingForm;