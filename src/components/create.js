// create.js

import { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

function Create() {
  // State to store the movie title, year, and poster URL inputs
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(''); // State for movie year
  const [posterUrl, setPosterUrl] = useState(''); // State for poster URL

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form action
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${posterUrl}`); // Log the entered title, year, and poster URL
    
    const movie = {
      title: title,
      year: year,
      poster: posterUrl
    };
    
    // Send a POST request to add the movie
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* Form for adding movie details */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title} // Bind the input to title state
            onChange={(e) => setTitle(e.target.value)} // Update title state when typing
          />
        </div>

        {/* Input field for the movie year */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year} // Bind the input to year state
            onChange={(e) => setYear(e.target.value)} // Update year state when typing
          />
        </div>

        {/* Input field for the movie poster URL */}
        <div className="form-group">
          <label>Add Poster URL: </label>
          <input type="text"
            className="form-control"
            value={posterUrl} // Bind the input to posterUrl state
            onChange={(e) => setPosterUrl(e.target.value)} // Update posterUrl state when typing
          />
        </div>

        <input type="submit" value="Add Movie" /> {/* Submit button */}
      </form>
    </div>
  );
}

export default Create;
