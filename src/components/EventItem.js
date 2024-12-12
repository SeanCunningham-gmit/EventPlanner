import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventItem = ({ event }) => {
  const { _id, name, date, time, location, description } = event;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      axios.delete(`http://localhost:4000/api/event/${_id}`)
        .then(() => alert('Event deleted successfully!'))
        .catch(error => console.error('Error deleting event:', error));
    }
  };

  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Date:</strong> {date}</p>
        <p className="card-text"><strong>Time:</strong> {time}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
        <p className="card-text">{description}</p>
        <Link to={`/edit/${_id}`} className="btn btn-primary">Edit</Link>
        <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EventItem;
