import React, { useEffect, useState } from 'react';
import EventItem from './EventItem';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  // Function to fetch all events from the backend
  const fetchEvents = () => {
    axios.get('http://localhost:4000/api/events')
      .then((response) => setEvents(response.data))
      .catch((error) => console.error('Error fetching events:', error));
  };

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {/* Map through the events array and render each EventItem */}
        {events.map((event) => (
          <EventItem 
            key={event._id} 
            event={event} 
            refreshEvents={fetchEvents} // Pass the fetchEvents function to refresh the list after changes
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
