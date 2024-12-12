import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { name, date, time, location, description };
    axios.post('http://localhost:4000/api/events', event)
      .then(() => alert('Event added successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Event Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Date" onChange={e => setDate(e.target.value)} />
        <input placeholder="Time" onChange={e => setTime(e.target.value)} />
        <input placeholder="Location" onChange={e => setLocation(e.target.value)} />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default Create;
