import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateMeetingForm from './CreateMeetingForm';
const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [error, setError] = useState(null);
  const apiEndpoint = "http://localhost:9091/api/meetings";

  const fetchAllMeetings = async () => {
    try {
      const response = await axios.get(apiEndpoint);
      if (response.status === 200) {
        console.log("Fetched all meetings", response.data);
        setMeetings(response.data);
      } else {
        console.error("Unexpected response status:", response.status);
        setError("Failed to load meetings");
      }
    } catch (error) {
      console.error("Error occurred during the API call", error);
      setError("Unable to fetch meetings from the server.");
    }
  };

  useEffect(() => {
    fetchAllMeetings();
  }, []);

  // (Update)
const updateMeetingsStatus = async (id, newStatus) => {
  try {
    
    const meetingResponse = await axios.get(`${apiEndpoint}/${id}`);
    const updatedMeeting = { ...meetingResponse.data, status: newStatus };

    const response = await axios.put(`${apiEndpoint}/${id}`, updatedMeeting);
    
    if (response.status === 200) {
      fetchAllMeetings();
      console.log("Invitation status updated successfully.");
    }
  } catch (error) {
    console.error("Error updating invitation:", error);
  }
};

// DELETE request is already correct
const deleteMeetings = async (id) => {
  try {
    const response = await axios.delete(`${apiEndpoint}/${id}`);
    if (response.status === 204) {
      fetchAllMeetings();
      console.log("Deleted meeting successfully.");
    }
  } catch (error) {
    console.error("Error deleting meeting:", error);
  }
};

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Meetings List</h2>
       
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
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
              <td colSpan="6" className="text-center">
                Loading...
              </td>
            </tr>
          ) : (
            meetings.map((meeting, index) => (
              <tr key={meeting.id || index}>
                <td>{ meeting.id}</td>
                <td>{meeting.title}</td>
                <td>{meeting.localDate}</td>
                <td>{meeting.time}</td>
                <td>{meeting.level}</td>
                <td>{meeting.email}</td>
                <td>{meeting.description}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMeetings(meeting.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
        
      </table>
    </div>
  );
};

export default Meetings;