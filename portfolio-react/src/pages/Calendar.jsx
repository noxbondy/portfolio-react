import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Calendar.css'; 
import { FaCalendarAlt } from 'react-icons/fa';// Assuming you have a CSS file for styling

 const Calendar = () => {
  return (
    <div className="container">
  <div className='row'>
  <div className='col-md-4'>
    <div className='sidebar bg-white'>
  <div class="nav-item">
    <a href="#" class="active"><i class="bi bi-speedometer2"></i> Dashboard</a>
  </div>
  <div class="nav-item">
    <a href="#"><i class="bi bi-calendar2-check"></i> Meetings</a>
  </div>
  <div class="nav-item">
    <a href="#"><i class="bi bi-people"></i> Users</a>
  </div>
  <div class="nav-item">
    <a href="#"><i class="bi bi-calendar3"></i> Calendar</a>
  </div>
    </div>

  </div>

    <divt className='col-md-8'>
 <div className='meet'>
<div class="mb-3">
    <h2> <FaCalendarAlt /></h2>
      <label for="title" class="form-label">Meeting Title</label>
      <input type="text" class="form-control" id="title" placeholder="Enter meeting title" />
    </div>
    
    <div class="row mb-3">
      <div class="col-md-6">
        <label for="date" class="form-label">Meeting Date</label>
        <input type="date" class="form-control" id="date" />
      </div>
      <div class="col-md-6">
        <label for="time" class="form-label">Meeting Time</label>
        <input type="time" class="form-control" id="time" />
      </div>
    </div>
    <div class="mb-3">
      <label for="level" class="form-label">Meeting Level</label>
      <select class="form-select" id="level">
        <option selected disabled>Choose level</option>
        <option>Team</option>
        <option>Department</option>
        <option>Company-wide</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="participants" class="form-label">Participants</label>
      <input type="email" class="form-control" id="participants" placeholder="Enter participant emails" />
    </div>
    <div class="mb-3">
      <label for="participants" class="form-label">Participants</label>
      <input type="email" class="form-control" id="participants" placeholder="Enter participant emails" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea class="form-control" id="description" rows="3" placeholder="Enter meeting description"></textarea>
    </div>
     <button type="submit" class="btn btn-primary">
      <i class="bi bi-plus-lg"></i> Create Meeting
    </button>
    <h4 class="mb-4">List of Created Meetings</h4>
     <table class="table table-striped mt-4">
     <thead class="table-light">
      <tr>
        <th>#</th>
        <th>Meeting Title</th>
        <th>Date</th>
        <th>Time</th>
        <th>Level</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Project Kickoff</td>
        <td>2024-05-15</td>
        <td>10:00 AM</td>
        <td>Team</td>
        <td>
          <button class="btn btn-warning btn-sm me-1">
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button class="btn btn-danger btn-sm">
            <i class="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Quarterly Review</td>
        <td>2024-06-01</td>
        <td>02:00 PM</td>
        <td>Department</td>
        <td>
          <button class="btn btn-warning btn-sm me-1">
            <i class="bi bi-pencil-fill"></i>
          </button>
          <button class="btn btn-danger btn-sm">
            <i class="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
 </div>
  </divt>
 
  </div>
  
</div>
  );
};
export default Calendar;
