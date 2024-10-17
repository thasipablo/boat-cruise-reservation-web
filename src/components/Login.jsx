import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const handleLoginEvent = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(loginUser({ name }));

      if (result.payload) {
        setName('');
        navigate('/');
        window.location.reload();
      } else {
        console.error('Login Error:', result.error);
        if (result.error && result.error.message.includes('Network Error')) {
          console.error('Network Error:', result.error);
          toast.error('There was a network error. Please check your internet connection and try again.');
        } else {
          toast.error('You are not registered. Please sign up before logging in.');
        }
      }
    } catch (error) {
      console.error('Async Error:', error);
      toast.error('An unexpected error occurred. Please try again.');
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
