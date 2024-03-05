/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newBoat } from '../../redux/slices/newBoatSlice';

const AddNewBoat = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [finance, setFinance] = useState('');
  const [option, setOption] = useState('');
  const [duration, setDuration] = useState('');
  const [amount, setAmount] = useState('');
  const [availability, setAvailability] = useState('false');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleNewBoatEvent = (e) => {
    e.preventDefault();
    dispatch(newBoat({
      name,
      description,
      image,
      finance,
      option,
      duration,
      amount,
      availability,
    }))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error('Add New Boat Error:', err);
        if (err.response) {
          console.error('Server Response:', err.response);
          console.error('Server Response Data:', err.response.data);
        }
      });
  };
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="mx-auto p-4 border rounded">
        <h2 className="mb-4">ADD NEW BOAT</h2>
        <form onSubmit={handleNewBoatEvent}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Finance-Fee"
              value={finance}
              onChange={(e) => setFinance(Number(e.target.value))}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Option to purchase fee"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Amount-payable"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <select
              className="form-select"
              id="availabilitySelect"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
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

export default AddNewBoat;
/* eslint-disable no-param-reassign */
