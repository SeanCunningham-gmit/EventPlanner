import React, { useEffect, useState } from 'react'; 
import EventItem from './EventItem'; // Import EventItem component

function Events() {
  const [events, setEvents] = useState([]); // State to hold events data

  // Function to fetch events from the backend API
  const fetchEvents = () => {
    fetch('http://localhost:4000/api/events') // Adjust port if necessary
      .then(response => response.json())
      .then(data => setEvents(data)) // Set events data to state
      .catch(error => console.error('Error fetching events:', error));
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {/* Map over the array of events */}
      {events.map((event) => (
        <EventItem 
          myEvent={event} 
          key={event._id || "6734d893576ff8b9d5d9d62c"} // Use _id from MongoDB as key, fallback to provided ID
          Reload={fetchEvents} // Pass fetchEvents to reload the event list after an action
        />
      ))}
    </div>
  );
}

export default Events;