const express = require('express'); // Import the Express framework  
const bodyParser = require('body-parser'); // Import body-parser for handling form data
const cors = require('cors'); // Import CORS to allow cross-origin requests
const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection
const Event = require('./models/event'); // Import the Event model

// Connect to MongoDB with admin credentials and DataRep as the database
mongoose.connect('mongodb+srv://admin:admin@datarep.uvyc6.mongodb.net/DataRep?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const app = express(); 
const port = 4000; // Define the port number for the server

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Home route
app.get('/', (req, res) => {
    res.send('Hello World'); // Respond with "Hello World"
});

// 1. Create a New Event
app.post('/api/events', async (req, res) => {
  try {
    const { name, date, eventID, type, location } = req.body;
    const newEvent = new Event({ name, date, eventID, type, location });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    res.status(400).json({ message: 'Error saving event', error });
  }
});

// 2. Retrieve All Events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving events', error });
  }
});

// 3. Retrieve an Event by ID
app.get('/api/event/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving event', error });
  }
});

// 4. Edit Event (GET specific event by ID for editing)
app.get('/api/event/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving event for editing', error });
  }
});

// 5. Update Event (PUT)
app.put('/api/event/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error });
  }
});

// 6. Delete Event (DELETE)
app.delete('/api/event/:id', async (req, res) => {
  try {
    console.log('Deleting event with ID:', req.params.id);
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).send({ message: "Event deleted successfully", event });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).send('Something went wrong!'); // Respond with an error message
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log server running message
});
