/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlinePlayArrow } from 'react-icons/md';

const BoatDetails = ({ boat, onBack }) => {
  const handleBack = () => {
    onBack();
  };
  return (
    <div className="boat_details row">
      <div className="boat_details_img_container col-md-5">
        <div className="selected_boat_img"><img src={boat.image} alt={boat.name} /></div>
        <div className="splide__arrows">
          <button type="button" className="splide__arrow splide__arrow--prev" onClick={handleBack}>
            <span className="react-icon react-icon--next">
              <MdOutlinePlayArrow />
            </span>
          </button>
        </div>
      </div>
      <div className="boat_info col-md-6 ms-3">
        <div><h1>{boat.name}</h1></div>
        <ul className="boat_expense">
          <li>
            <p>finance_fee</p>
            {boat.finance}
          </li>
          <li>
            <p>Option to purchase fee</p>
            {boat.option}
          </li>
          <li>
            <p>Duration</p>
            {boat.duration}
          </li>
          <li>
            <p>Total amount payable</p>
            {boat.amount}
          </li>
          <li>
            <p>Availability</p>
            {boat.availability ? 'Available' : 'Not Available'}
          </li>
        </ul>
        <div><p>{boat.description}</p></div>
        <div className="reservation_btn_container">
          <Link to="/reservation" className="btn btn-primary">Reserve</Link>
        </div>
      </div>
    </div>
  );
};

BoatDetails.propTypes = {
  boat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
    finance: PropTypes.number,
    option: PropTypes.number,
    duration: PropTypes.number.isRequired,
    amount: PropTypes.number,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default BoatDetails;
