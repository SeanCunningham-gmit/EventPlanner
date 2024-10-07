import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // // Import necessary components
import NavigationBar from './components/NavigationBar'; // Import custom components
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';

function App() {
  return (
    // enableing navigation between different routes
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/Read" element={<Read />}  />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; // Export the App component as the default export
