import axios from "axios"; 
import { useState, useEffect } from "react";
import Events from "./Events"; // Import Events component

function Read() {
  const [data, setData] = useState([]); // State to store the list of events

  // Function to reload event data
  const Reload = () => {
    console.log("Reloading event data...");
    axios.get('http://localhost:4000/api/events')  
      .then((response) => {
        // Set the events state with the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error); // Log any errors
      });
  };

  // Initial fetch when the component loads
  useEffect(() => {
    Reload(); // Call the Reload function on component mount
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      {/* Pass the events and Reload function to the Events component */}
      <Events myEvents={data} ReloadData={Reload} />
    </div>
  );
}

export default Read;
