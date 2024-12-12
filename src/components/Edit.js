import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/api/event/${id}`)
      .then((response) => {
        const { name, date, time, location, description } = response.data;
        setName(name);
        setDate(date);
        setTime(time);
        setLocation(location);
        setDescription(description);
      })
      .catch(error => console.error('Error fetching event:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = { name, date, time, location, description };
    axios.put(`http://localhost:4000/api/event/${id}`, updatedEvent)
      .then(() => {
        alert('Event updated successfully!');
        navigate('/read');
      })
      .catch(error => console.error('Error updating event:', error));
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Event Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Date" value={date} onChange={e => setDate(e.target.value)} />
        <input placeholder="Time" value={time} onChange={e => setTime(e.target.value)} />
        <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default Edit;
