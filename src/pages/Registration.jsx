import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/userSlice';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleRegisterEvent = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.error('Passwords do not match');
      return;
    }

    const userCredentials = {
      name, email, password, passwordConfirmation,
    };
    console.log('Form Data:', userCredentials);

    try {
      const result = await dispatch(registerUser({ user: userCredentials }));

      if (result.payload) {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
        navigate('/');
      }
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
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Registration'}
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
