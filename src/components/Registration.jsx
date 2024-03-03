import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/userSlice';

const Registration = () => {
  const [name, setName] = useState('');
  const [Error, setError] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleRegisterEvent = (e) => {
    e.preventDefault();
    if (name.trim(Error) === '') {
      setError('Name cannot be empty');
      return;
    }
    dispatch(registerUser({ name }))
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.error('Register Error:', err);
        navigate('/register');
      });
  };

  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="mx-auto p-4 border rounded">
        <h2 className="mb-4">Registration</h2>
        <form onSubmit={handleRegisterEvent}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Loading...' : 'Register'}
          </button>
          {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;
