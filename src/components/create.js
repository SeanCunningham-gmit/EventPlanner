import { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

function Create() {
  // State to store the event name, date, and location inputs
  const [name, setName] = useState('');
  const [date, setDate] = useState(''); // State for event date
  const [locationUrl, setLocationUrl] = useState(''); // State for location URL

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form action
    
    console.log(`Name: ${name}, Date: ${date}, Location: ${locationUrl}`); // Log the entered name, date, and location URL
    
    const event = {
      name: name,
      date: date,
      location: locationUrl
    };
    
    // Send a POST request to add the event
    axios.post('http://localhost:4000/api/events', event)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div>
      <h2>Add Your Event Here</h2>
      {/* Form for adding event details */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Event Name: </label>
          <input type="text"
            className="form-control"
            value={name} // Bind the input to name state
            onChange={(e) => setName(e.target.value)} // Update name state when typing
          />
        </div>

        {/* Input field for the event date */}
        <div className="form-group">
          <label>Add Event Date: </label>
          <input type="text"
            className="form-control"
            value={date} // Bind the input to date state
            onChange={(e) => setDate(e.target.value)} // Update date state when typing
          />
        </div>

        {/* Input field for the event location URL */}
        <div className="form-group">
          <label>Add A Location Picture: </label>
          <input type="text"
            className="form-control"
            value={locationUrl} // Bind the input to locationUrl state
            onChange={(e) => setLocationUrl(e.target.value)} // Update locationUrl state when typing
          />
        </div>

        <input type="submit" value="Add Event" /> {/* Submit button */}
      </form>
    </div>
  );
}

export default Create;
