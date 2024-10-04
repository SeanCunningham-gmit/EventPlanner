// Import the Navbar and Nav components
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Defining a component called NavigationBar
const NavigationBar = () => {
  return (
    // Created a Bootstrap-styled navbar with a light background
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
};
// Export the NavigationBar component, so we can use it in other parts of the app
export default NavigationBar;
