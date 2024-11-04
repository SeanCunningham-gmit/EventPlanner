const express = require('express'); // Import the Express framework
const bodyParser = require('body-parser'); // Import body-parser for handling form data
const cors = require('cors'); // Import CORS to allow cross-origin requests
const path = require('path'); // Import path module for file path operations
const app = express(); 
const port = 4000; // Define the port number for the server

app.use(cors()); // Enable CORS for all routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specific headers
  next();
});

app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.send('Hello World'); // Respond with "Hello World"
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name; // Extract the name from the URL
    res.send(`Hello ${name}`);
});

app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name; // Extract the name from the URL
    const surname = req.params.surname; // Extract the surname from the URL
    res.send(`Hello ${name} ${surname}`);
});

app.get('/api/movies', (req, res) => {
    const movies = [
        {
          "Title": "Avengers: Infinity War (server)",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War (server)",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z (server)",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
      ];
    res.status(201).json({ myMovies: movies }); // Respond with JSON data containing the movies
});

app.post('/api/movies', (req, res)=>{
    console.log(req.body)   //logs the response from create.js onto console
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html
});

app.get('/name', (req, res) => {
    const firstname = req.query.firstname; // Extract firstname from query parameters
    const lastname = req.query.lastname; // Extract lastname from query parameters
    res.send(`Hello ${firstname} ${lastname}`);
});

app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Extract firstname from the request body
    const lastname = req.body.lastname; // Extract lastname from the request body
    res.send(`Hello ${firstname} ${lastname}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).send('Something went wrong!'); // Respond with an error message
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log server running message
});
