const express = require('express'); // Import the Express framework 
const bodyParser = require('body-parser'); // Import body-parser for handling form data
const cors = require('cors'); // Import CORS to allow cross-origin requests
const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection
const Movie = require('./models/movie'); // Import the Movie model

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

// 1. Create a New Movie
app.post('/api/movies', async (req, res) => {
  try {
    const { title, year, imdbID, type, poster } = req.body;
    const newMovie = new Movie({ title, year, imdbID, type, poster });
    await newMovie.save();
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
  } catch (error) {
    res.status(400).json({ message: 'Error saving movie', error });
  }
});

// 2. Retrieve All Movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies', error });
  }
});

// 3. Retrieve a Movie by ID
app.get('/api/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movie', error });
  }
});

// 4. Edit Movie (GET specific movie by ID for editing)
app.get('/api/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).send(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movie for editing', error });
  }
});

// 5. Update Movie (PUT)
app.put('/api/movie/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).send(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie', error });
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
