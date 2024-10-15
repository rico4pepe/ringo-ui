//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route,  Routes,  Navigate   } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
    <Routes>
      {/* Sign-in page */}
      <Route path="/" element={<SignIn />} />
      
      {/* Dashboard page */}
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  </Router>
  );
};


export default App;
