import React from 'react';
import Boats from '../components/boats/Boats';
import '../styles/boats/boats.css';

function BoatsPage() {
  return (
    <div className="boat_list_page">
      <h1>Latest Models</h1>
      <p>Please select a Model</p>
      <Boats />
    </div>
  );
}

export default BoatsPage;
