// Import the React library
import React from 'react';
// Defining a component called Content
const Content = () => {
  return (
    // Creating a div containing two headings
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
// Export the Content component, this allows use to use it in other parts of the app
export default Content;
