const mongoose = require('mongoose');

// Define the schema for an Event
const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  location: String,
  description: String
});

// Create the Event model from the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
