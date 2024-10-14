import React from 'react';
import { useEffect, useState } from 'react'; // Import useState and useEffect from React
import Movies from './Movies'; // Import Movies component
import axios from 'axios'; // Import axios for API requests

function Read() {
  // State to store the list of movies
  const [movies, setMovies] = useState([]);

  // Fetch movies data when the component loads
  useEffect(() => {
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        // Set the movies state with the fetched data
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  }, []); // Empty array means this runs only once, when the component mounts

  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* Pass the movies to the Movies component */}
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;
