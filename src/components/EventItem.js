import React, { useEffect } from 'react'; 
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card component
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios"; // Import axios for HTTP requests

function EventItem(props) {
  // useEffect to log when the prop changes
  useEffect(() => {
    console.log("Event Item:", props.myEvent);
  }, [props.myEvent]);

  // Handle delete functionality
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/event/' + props.myEvent._id)
      .then(() => {
        props.Reload(); // Refresh the event list after deletion
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };

  // Event data from props
  const { name, date, location } = props.myEvent;

  return (
    <div className="mb-3"> 
      {/* Bootstrap Card */}
      <Card style={{ width: '18rem' }}>
        {/* Card Header to display event name */}
        <Card.Header>{name}</Card.Header>
        
        {/* Card Body to display the location image */}
        <Card.Body>
          <Card.Img variant="top" src={location} alt={name} /> {/* Event Location */}
          <Card.Text>
            <Button variant="primary" href={`https://www.imdb.com/title/${props.myEvent.eventID}`} target="_blank">
              View Details
            </Button>
          </Card.Text>
          {/* Link to edit page */}
          <Link to={"/edit/" + props.myEvent._id} className="btn btn-primary">
            Edit
          </Link>
          {/* Delete Button */}
          <Button variant="danger" onClick={handleDelete} className="ms-2">Delete</Button>
        </Card.Body>
        
        {/* Card Footer to display the date */}
        <Card.Footer className="text-muted">Date: {date}</Card.Footer>
      </Card>
    </div>
  );
}

export default EventItem;
