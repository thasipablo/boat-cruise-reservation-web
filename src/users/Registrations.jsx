import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchRegistration } from '../redux/usersSlice/registrationSlice';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users', formData);
      console.log('Registration successful:', response.data);
      dispatch(fetchRegistration());
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </label>
        <br />

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <br />

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </label>
        <br />

        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={formData.password_confirmation}
            onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
