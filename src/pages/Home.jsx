import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Layout from './Layout';
import '../styles/homepage.css';

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

const Home = () => {
  const user = getUser();

  return (
    <>
      {user ? (
        <div className="homepage-container">
          <Navbar />
          <Layout />
        </div>
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
    </>
  );
};

export default Home;
