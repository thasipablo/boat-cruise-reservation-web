import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/userSlice';

const Registration = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleRegisterEvent = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ name }));
      navigate('/login');
    } catch (err) {
      console.error('Registration Error:', err);
    }
  };
  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegisterEvent}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
        {error && (
          <div role="alert">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Registration;
