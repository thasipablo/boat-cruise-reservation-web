/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newBoat } from '../../redux/slices/newBoatSlice';

const AddNewBoat = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [financeFee, setFinanceFee] = useState('');
  const [optionToPurchaseFee, setOptionToPurchaseFee] = useState('');
  const [duration, setDuration] = useState('');
  const [amountPayable, setAmountPayable] = useState('');
  const [availability, setAvailability] = useState('');
  const [Error, setError] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleNewBoatEvent = (e) => {
    e.preventDefault();
    if (Error.trim() !== '') {
      setError('Field cannot be empty');
      return;
    }
    dispatch(newBoat({
      name,
      description,
      image,
      financeFee,
      optionToPurchaseFee,
      duration,
      amountPayable,
      availability,
    }))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.error('Add New Boat Error:', err);
        navigate('/new-boat');
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
              className="form-control"
              placeholder="Finance-Fee"
              value={financeFee}
              onChange={(e) => setFinanceFee(e.target.value)}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Option to purchase fee"
              value={optionToPurchaseFee}
              onChange={(e) => setOptionToPurchaseFee(e.target.value)}
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
              className="form-control"
              placeholder="Amount-payable"
              value={amountPayable}
              onChange={(e) => setAmountPayable(e.target.value)}
            />
            <input
              type="boolean"
              className="form-control"
              placeholder="Availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
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

export default AddNewBoat;
/* eslint-disable no-param-reassign */
