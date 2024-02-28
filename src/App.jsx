import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
