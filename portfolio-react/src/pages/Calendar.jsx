import React, { useState, useEffect } from 'react';
import '../Styles/Calendar.css';
import { FaCalendarAlt } from 'react-icons/fa';

const LOCAL_STORAGE_KEY = 'meetings';

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

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedMeetings = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedMeetings) {
      setMeetings(JSON.parse(storedMeetings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(meetings));
  }, [meetings]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.date || !formData.time || !formData.level) {
      alert("Please fill in all required fields.");
      return;
    }

    if (isEditing) {
      setMeetings(prev =>
        prev.map(m => m.id === editId ? { ...m, ...formData } : m)
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newMeeting = {
        id: Date.now(),
        ...formData,
      };
      setMeetings(prev => [...prev, newMeeting]);
    }

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
    if (window.confirm('Are you sure you want to delete this meeting?')) {
      setMeetings(prev => prev.filter(m => m.id !== id));
      if (isEditing && editId === id) {
        setIsEditing(false);
        setEditId(null);
        setFormData({
          title: '',
          date: '',
          time: '',
          level: '',
          participants: '',
          description: '',
        });
      }
    }
  };

  const handleEdit = (meeting) => {
    setIsEditing(true);
    setEditId(meeting.id);
    setFormData({
      title: meeting.title,
      date: meeting.date,
      time: meeting.time,
      level: meeting.level,
      participants: meeting.participants,
      description: meeting.description,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData({
      title: '',
      date: '',
      time: '',
      level: '',
      participants: '',
      description: '',
    });
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-4'>
          <div className='sidebar bg-white'>
            <div className="nav-item"><a href="#" className="active"><i className="bi bi-speedometer2"></i> Dashboard</a></div>
            <div className="nav-item"><a href="#"><i className="bi bi-calendar2-check"></i> Meetings</a></div>
            <div className="nav-item"><a href="#"><i className="bi bi-people"></i> Users</a></div>
            <div className="nav-item"><a href="#"><i className="bi bi-calendar3"></i> Calendar</a></div>
          </div>
        </div>

        <div className='col-md-8'>
          <div className='meet'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <h2><FaCalendarAlt /></h2>
                <label htmlFor="title" className="form-label">Meeting Title</label>
                <input type="text" className="form-control" id="title" value={formData.title} onChange={handleChange} />
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
                <input type="email" className="form-control" id="participants" value={formData.participants} onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary me-2">
                <i className={`bi ${isEditing ? 'bi-pencil-square' : 'bi-plus-lg'}`}></i>
                {isEditing ? ' Update Meeting' : ' Create Meeting'}
              </button>

              {isEditing && (
                <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              )}
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
                        <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(meeting)}>
                          <i className="bi bi-pencil-fill"></i>
                        </button>
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