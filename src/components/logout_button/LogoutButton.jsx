// components/LogoutButton.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

export default LogoutButton;
