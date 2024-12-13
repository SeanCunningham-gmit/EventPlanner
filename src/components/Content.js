// Import the React library 
import React from 'react';
// Defining a component called Content
const Content = () => {
  return (
    <div className="content-container">
      <h1 className="content-title">Event Planner</h1>
      <h2 className="content-subtitle">Discover Amazing Events in Ireland</h2>
      <div className="event-list">
        {/* Example Event Cards */}
        <div className="event-card">
          <h3>St. Patrick's Day Parade</h3>
          <p><strong>Date:</strong> March 17, 2024</p>
          <p><strong>Location:</strong> Dublin City Center</p>
          <p>Experience the vibrant celebration of Irish culture with colorful parades, music, and festivities!</p>
        </div>
        <div className="event-card">
          <h3>Galway International Arts Festival</h3>
          <p><strong>Date:</strong> July 15 - July 28, 2024</p>
          <p><strong>Location:</strong> Galway City</p>
          <p>A world-class festival featuring music, theater, and visual arts in the heart of Ireland's west coast.</p>
        </div>
        <div className="event-card">
          <h3>Cork Jazz Festival</h3>
          <p><strong>Date:</strong> October 25 - October 28, 2024</p>
          <p><strong>Location:</strong> Cork City</p>
          <p>One of Europe’s biggest jazz festivals, showcasing incredible international and local talent.</p>
        </div>
        <div className="event-card">
          <h3>Electric Picnic</h3>
          <p><strong>Date:</strong> August 30 - September 1, 2024</p>
          <p><strong>Location:</strong> Stradbally, County Laois</p>
          <p>A premier music and arts festival featuring top performers, comedy acts, and food vendors.</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
