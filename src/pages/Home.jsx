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
  const handleDisplay = () => {
    document.querySelector('#nav').style.display = 'block';
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('#cross').style.display = 'block';
  };

  const handleHide = () => {
    document.querySelector('#nav').style.display = 'none';
    document.querySelector('#menu').style.display = 'block';
    document.querySelector('#cross').style.display = 'none';
  };

  return (
    <>
      {user ? (
        <div className="homepage-container row">
          <div className="col-md-3">
            <div id="mobile">
              <svg onClick={handleDisplay} id="menu" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list m-3" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
              <svg onClick={handleHide} id="cross" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg m-3" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
            <Navbar />
          </div>
          <div className="col-md-6">
            <Layout />
          </div>
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
