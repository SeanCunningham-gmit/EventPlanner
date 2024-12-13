import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // // Import necessary components
import NavigationBar from './components/NavigationBar'; // Import custom components

import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/create';
import Edit from './components/Edit';

function App() {
  return (
    // enableing navigation between different routes
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/Read" element={<Read />}  />
        <Route path="/create" element={< Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; // Export the App component as the default export
