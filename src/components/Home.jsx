import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const getUser = () => {
  const userString = localStorage.getItem('user');

  try {
    if (userString) {
      const user = JSON.parse(userString);
      return user;
    }
  } catch (error) {
    console.error('Error parsing user JSON:', error);
  }

  return null;
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
        window.location.reload();
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

const Home = () => {
  const user = getUser();

  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <div className="d-flex align-items-center min-vh-100">
            <div className="mx-auto">
              <h4>
                Hello,
                {user.name}
              </h4>
              <LogoutButton />
            </div>
          </div>
        </>
      ) : (
        <div className="auth-links">
          <div className="d-flex align-items-center min-vh-100">
            <div className="mx-auto">
              <Link to="/register" className="btn btn-primary mr-2">Register</Link>
              <Link to="/login" className="btn btn-secondary">Login</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
