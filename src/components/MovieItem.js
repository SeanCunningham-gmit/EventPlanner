import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios"; // Import axios for HTTP requests

function MovieItem(props) {
  // useEffect to log when the prop changes
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]);

  // Handle delete functionality
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
      .then(() => {
        props.Reload(); // Refresh the movie list after deletion
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  };

  // Movie data from props
  const { Title, Year, Poster } = props.myMovie;

  return (
    <div className="mb-3"> 
      {/* Bootstrap Card */}
      <Card style={{ width: '18rem' }}>
        {/* Card Header to display movie title */}
        <Card.Header>{Title}</Card.Header>
        
        {/* Card Body to display the poster image */}
        <Card.Body>
          <Card.Img variant="top" src={Poster} alt={Title} /> {/* Movie Poster */}
          <Card.Text>
            <Button variant="primary" href={`https://www.imdb.com/title/${props.myMovie.imdbID}`} target="_blank">
              View on IMDb
            </Button>
          </Card.Text>
          {/* Link to edit page */}
          <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary">
            Edit
          </Link>
          {/* Delete Button */}
          <Button variant="danger" onClick={handleDelete} className="ms-2">Delete</Button>
        </Card.Body>
        
        {/* Card Footer to display the year */}
        <Card.Footer className="text-muted">Year: {Year}</Card.Footer>
      </Card>
    </div>
  );
}

export default MovieItem;



