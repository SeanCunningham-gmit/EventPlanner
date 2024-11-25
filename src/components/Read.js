import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./Movies"; // Import Movies component

function Read() {
  const [data, setData] = useState([]); // State to store the list of movies

  // Function to reload movie data
  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')  
      .then((response) => {
        // Set the movies state with the fetched data
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
      <h2>Movie List</h2>
      {/* Pass the movies and Reload function to the Movies component */}
      <Movies myMovies={data} ReloadData={Reload} />
    </div>
  );
}

export default Read;
