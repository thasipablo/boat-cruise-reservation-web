import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(loginUser({ name }));
      if (result.payload) {
        setName('');
        navigate('/');
      }
    } catch (err) {
      console.error('Login Error:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginEvent}>
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
