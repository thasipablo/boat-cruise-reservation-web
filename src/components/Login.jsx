import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

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
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4">
        <h4 className="mb-4">Login</h4>
        <form onSubmit={handleLoginEvent}>
          <div className="mb-3">
            <p>Name</p>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
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

export default Login;
