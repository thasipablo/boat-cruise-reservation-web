/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { MdOutlinePlayArrow } from 'react-icons/md';
import '@splidejs/react-splide/css';

const SplideCarousel = ({ boats, onBoatClick }) => {
  const truncateDescription = (description, maxLength) => (description.length > maxLength ? `${description.substring(0, maxLength)}...` : description);
  return (
    <Splide
      className="splide__container"
      tag="section"
      aria-label="Boats carousel"
      hasTrack={false}
      options={{
        rewind: true,
        type: 'loop',
        perPage: 3,
        perMove: 1,
        width: '90%',
        height: '100%',
        gap: '1rem',
        cover: false,
        isNavigation: false,
        pagination: true,
        mediaQuery: 'max',
        arrows: 2,
        breakpoints: {
          992: {
            arrows: false,
            perPage: 1,
            width: '100%',
          },
        },
      }}
    >
      <SplideTrack className="boat_list_container">
        {boats.map((boat) => (
          <SplideSlide key={boat.id}>
            <div
              className="boat_item m-2"
              onClick={() => {
                onBoatClick(boat);
                localStorage.setItem('boatid', [boat.id]);
                localStorage.setItem('boatname', [boat.name]);
              }}
            >
              <img src={boat.image} alt={boat.name} className="boat-img" />
              <div className="boat_description">
                <h2>{boat.name}</h2>
                <p>{truncateDescription(boat.description, 100)}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="splide__arrows">
        <button type="button" className="splide__arrow splide__arrow--prev">
          <span className="react-icon react-icon--prev">
            <MdOutlinePlayArrow />
          </span>
        </button>
        <button type="button" className="splide__arrow splide__arrow--next">
          <span className="react-icon react-icon--next">
            <MdOutlinePlayArrow />
          </span>
        </button>
      </div>
    </Splide>
  );
};

SplideCarousel.propTypes = {
  boats: PropTypes.arrayOf(Object).isRequired,
  onBoatClick: PropTypes.func.isRequired,
};

SplideCarousel.defaultProps = {};

export default SplideCarousel;
