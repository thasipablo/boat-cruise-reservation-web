import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoats } from '../../redux/slices/boatSlice';
import SplideCarousel from '../carousel/SplideCarousel';
import '../../styles/boats/boats.css';

function Boats() {
  const dispatch = useDispatch();
  const boats = useSelector((state) => state.boats.data);
  const loading = useSelector((state) => state.boats.loading);
  const error = useSelector((state) => state.boats.error);

  useEffect(() => {
    dispatch(fetchBoats());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <SplideCarousel boats={boats} />
    </div>
  );
}

export default Boats;
