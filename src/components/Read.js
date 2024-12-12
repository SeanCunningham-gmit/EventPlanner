import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';
import axios from 'axios';

const Read = () => {
  const [events, setEvents] = useState([]);

  // Fetch all events from the backend
  useEffect(() => {
    axios.get('http://localhost:4000/api/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {events.map(event => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Read;
