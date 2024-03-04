import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/userSlice';

const Registration = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleRegisterEvent = async (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      toast.error('Name cannot be empty');
      return;
    }

    try {
      const result = await dispatch(registerUser({ name }));
      if (result.ok) {
        navigate('/login');
      } else {
        console.error('Registration Error:', result.error);
        toast.error('This identifier is already in use.');
        navigate('/register');
      }
    } catch (err) {
      console.error('Registration Error:', err);
      toast.error('An unexpected error occurred.');
    }
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
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Registration;
