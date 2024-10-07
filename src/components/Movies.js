import React from 'react';
import MovieItem from './MovieItem'; // Import MovieItem component

function Movies(props) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {/* Map over the array of movies p */}
      {props.myMovies.map((movie) => (
        <MovieItem myMovie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

export default Movies;

