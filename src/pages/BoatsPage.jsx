import React, { useState } from 'react';
import Boats from '../components/boats/Boats';
import '../styles/boats/boats.css';
import BoatDetails from '../components/boats/BoatDetails';

function BoatsPage() {
  const [selectedBoat, setSelectedBoat] = useState(null);

  const handleBoatClick = (boat) => {
    setSelectedBoat(boat);
  };

  const handleBack = () => {
    setSelectedBoat(null);
  };

  return (
    <div className="boat_list_page">
      {selectedBoat ? (
        <>
          <BoatDetails boat={selectedBoat} onBack={handleBack} />
        </>
      ) : (
        <>
          <h1 className="boat_page_title">Latest Models</h1>
          <p className="boat_page_title">Please select a Model</p>
          <Boats onBoatClick={handleBoatClick} />
        </>
      )}
    </div>
  );
}

export default BoatsPage;
