import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const getAuthToken = () => localStorage.getItem('authToken');

const LogoutButton = () => {
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      const authToken = getAuthToken();

      const response = await fetch('http://localhost:3000/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Logout successful');
        // Handle successful logout on the client side (clear local storage, update state, etc.)
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        console.error('Logout failed:', errorMessage);
        // Handle logout failure (show error message, redirect, etc.)
      }
    } catch (error) {
      setError('An unexpected error occurred.');
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      {error && (
        <div role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

const Home = () => (
  <div>
    {getUser() ? (
      <>
        <h4>
          Hello
          {getUser().name}
        </h4>
        <h5>{getUser().email}</h5>
        <LogoutButton />
      </>
    ) : (
      <div>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    )}
  </div>
);

export default Home;
