import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateMeetingForm from './CreateMeetingForm';
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import '../Styles/Meetngs.css';


const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [meetingId, setMeetingId] = useState('');
  const [singleMeeting, setSingleMeeting] = useState(null);
  const [error, setError] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const apiEndpoint = "http://localhost:9091/api/meetings";

  useEffect(() => {
    fetchAllMeetings();
  }, []);

// All Meetings 
  const fetchAllMeetings = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      if (response.status === 200) {
        setMeetings(response.data);
        setSelectedIds([]);
        setEditData({});
        setEditMode(false);
      } else {
        setError("Failed to load meetings");
      }
    } catch (error) {
      setError("Unable to fetch meetings from the server.");
    }
  };

// CheckBox
  const handleCheckboxChange = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Edit 
  const handleEdit = () => {
    const selectedData = {};
    meetings.forEach(meeting => {
      if (selectedIds.includes(meeting.id)) {
        selectedData[meeting.id] = { ...meeting };
      }
    });
    setEditData(selectedData);
    setEditMode(true);
  };

  // Cancel 
  const handleCancel = () => {
    setEditData({});
    setEditMode(false);
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [name]: value,
      }
    }));
  };

// Save 
  const handleSave = async () => {
    try {
      const updatePromises = selectedIds.map(id =>
        axios.put(`${apiEndpoint}/${id}`, editData[id])
      );
      await Promise.all(updatePromises);
      fetchAllMeetings();
    } catch (error) {
      console.error("Error updating meetings:", error);
    }
  };

   // Delete 
  const handleDelete = async () => {
    try {
      const deletePromises = selectedIds.map(id =>
        axios.delete(`${apiEndpoint}/${id}`)
      );
      await Promise.all(deletePromises);
      fetchAllMeetings();
    } catch (error) {
      console.error("Error deleting meetings:", error);
    }
  };

  // Search by id 
const fetchMeetingById = async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/${meetingId}`);
      if (response.status === 200) {
        
        setSingleMeeting(response.data);
        console.log("Id  found:", response.data);
       
      } else {
        setError("Meeting not found");
      }
    } catch (error) {
      setError("No id found.");
    }
  };

  return (
    
    <div className="container ms-5">
      <h2 className="mb-4">Meetings List</h2>
      
   
      <div className='p-4 max-w-md mx-auto'>

<input
        type="text"
        value={meetingId}
        onChange={(e) => setMeetingId(e.target.value)}
        placeholder="Enter meeting ID"
        className="border px-2 py-1 mb-2 w-full"/>
      <button className="btn btn dark " onClick={fetchMeetingById}>
        <CiSearch />
      </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <button className="btn btn-primary mr-2" onClick={handleEdit} disabled={selectedIds.length === 0}>
         <CiEdit />
        </button>
        <button className="btn btn-success mr-2" onClick={handleSave} disabled={!editMode}>
          <FaRegSave />
        </button>
        <button className="btn btn-secondary mr-2" onClick={handleCancel} disabled={!editMode}>
          <MdCancel />
        </button>
        <button className="btn btn-danger" onClick={handleDelete} disabled={selectedIds.length === 0}>
          <MdAutoDelete />
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Select</th>
            <th>Id</th>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Email</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {meetings.length === 0 && !error ? (
            <tr>
              <td colSpan="8" className="text-center">Loading...</td>
            </tr>
          ) : (
            meetings.map((meeting) => (
              <tr key={meeting.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(meeting.id)}
                    onChange={() => handleCheckboxChange(meeting.id)}
                  />
                </td>
                <td>{meeting.id}</td>

                {editMode && selectedIds.includes(meeting.id) ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="title"
                        value={editData[meeting.id]?.title || ''}
                        onChange={(e) => handleInputChange(meeting.id, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="meetingDate"
                        value={editData[meeting.id]?.meetingDate || ''}
                        onChange={(e) => handleInputChange(meeting.id, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        name="meetingTime"
                        value={editData[meeting.id]?.meetingTime || ''}
                        onChange={(e) => handleInputChange(meeting.id, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="level"
                        value={editData[meeting.id]?.level || ''}
                        onChange={(e) => handleInputChange(meeting.id, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={editData[meeting.id]?.email || ''}
                        onChange={(e) => handleInputChange(meeting.id, e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={editData[meeting.id]?.description || ''}
                        onChange={(e) => handleInputChange(meeting.id, e)}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td>{meeting.title}</td>
                    <td>{meeting.meetingDate}</td>
                    <td>{meeting.meetingTime}</td>
                    <td>{meeting.level}</td>
                    <td>{meeting.email}</td>
                    <td>{meeting.description}</td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;