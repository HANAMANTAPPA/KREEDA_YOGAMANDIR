// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes'; // Import the routes

function App() {
  return (
    <Router>
      <AppRoutes /> {/* Render the routes */}
    </Router>
  );
}

export default App;
