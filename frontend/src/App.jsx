import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';  // Ensure this import is correct (case-sensitive)
import Login from './Login';        // Ensure this import is correct (case-sensitive)
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Register />} />   {/* Register page should be the first route */}
      <Route path="/login" element={<Login />} />  {/* Login page */}
    </Routes>
  </Router>
);

export default App;
