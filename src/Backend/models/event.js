// models/event.js
const mongoose = require('mongoose');

// Define the schema for an Event
const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  eventID: String,
  type: String,
  location: String
});

// Create the Event model from the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
