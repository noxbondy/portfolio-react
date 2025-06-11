import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Calendar.css'; 
import { FaCalendarAlt } from 'react-icons/fa';// Assuming you have a CSS file for styling

 const Calendar = () => {
  const [meetings, setMeetings] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    level: '',
    participants: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time || !formData.level) {
      alert("Please fill all required fields.");
      return;
    }

    const newMeeting = {
      id: Date.now(),
      ...formData
    };

    setMeetings(prev => [...prev, newMeeting]);

    setFormData({
      title: '',
      date: '',
      time: '',
      level: '',
      participants: '',
      description: '',
    });
  };

  const handleDelete = (id) => {
    setMeetings(prev => prev.filter(m => m.id !== id));
  };



  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-4'>
          <div className='sidebar bg-white'>
            <div className="nav-item">
              <a href="#" className="active"><i className="bi bi-speedometer2"></i> Dashboard</a>
            </div>
            <div className="nav-item">
              <a href="#"><i className="bi bi-calendar2-check"></i> Meetings</a>
            </div>
            <div className="nav-item">
              <a href="#"><i className="bi bi-people"></i> Users</a>
            </div>
            <div className="nav-item">
              <a href="#"><i className="bi bi-calendar3"></i> Calendar</a>
            </div>
          </div>
        </div>

        <div className='col-md-8'>
          <div className='meet'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h2><FaCalendarAlt /></h2>
                <label htmlFor="title" className="form-label">Meeting Title</label>
                <input type="text" className="form-control" id="title" value={formData.title} onChange={handleChange} placeholder="Enter meeting title" />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">Meeting Date</label>
                  <input type="date" className="form-control" id="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="time" className="form-label">Meeting Time</label>
                  <input type="time" className="form-control" id="time" value={formData.time} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="level" className="form-label">Meeting Level</label>
                <select className="form-select" id="level" value={formData.level} onChange={handleChange}>
                  <option value="" disabled>Choose level</option>
                  <option>Team</option>
                  <option>Department</option>
                  <option>Company-wide</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="participants" className="form-label">Participants</label>
                <input type="email" className="form-control" id="participants" value={formData.participants} onChange={handleChange} placeholder="Enter participant emails" />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3" value={formData.description} onChange={handleChange} placeholder="Enter meeting description"></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="bi bi-plus-lg"></i> Create Meeting
              </button>
            </form>

            <h4 className="mb-4 mt-5">List of Created Meetings</h4>
            {meetings.length === 0 ? (
              <p>No meetings created yet.</p>
            ) : (
              <table className="table table-striped mt-4">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Level</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((meeting, index) => (
                    <tr key={meeting.id}>
                      <td>{index + 1}</td>
                      <td>{meeting.title}</td>
                      <td>{meeting.date}</td>
                      <td>{meeting.time}</td>
                      <td>{meeting.level}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(meeting.id)}>
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
