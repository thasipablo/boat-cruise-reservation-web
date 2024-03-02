import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const getAuthToken = () => localStorage.getItem('authToken');

const LogoutButton = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { loading: reduxLoading, error: reduxError } = useSelector((state) => state.user);

  useEffect(() => {
    if (!loading && !error) {
      navigate('/');
    }
  }, [loading, error, navigate]);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const authToken = getAuthToken();

      const response = await fetch('http://localhost:3000/api/users/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        console.log('Logout successful');
        localStorage.removeItem('user');
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error.message || 'An unexpected error occurred.');
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleLogout} disabled={reduxLoading}>
        {reduxLoading ? 'Logging out...' : 'Logout'}
      </button>
      {reduxError && (
        <div role="alert">
          {reduxError}
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
          {' '}
          {getUser().name}
        </h4>
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
