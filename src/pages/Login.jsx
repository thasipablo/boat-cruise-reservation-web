import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleLoginEvent = async (e) => {
    e.preventDefault();

    const userCredentials = { email, password };

    try {
      const result = await dispatch(loginUser(userCredentials));

      if (result.payload) {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    } catch (err) {
      console.error('Login Error:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginEvent}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
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

export default Login;
