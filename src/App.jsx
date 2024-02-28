import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

export default App;
