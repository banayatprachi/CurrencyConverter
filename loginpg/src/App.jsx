import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        
        <Route index element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
