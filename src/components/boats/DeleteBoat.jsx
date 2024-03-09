import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchBoats, fetchToDeleteBoats } from '../../redux/slices/boatSlice';
import '../../styles/boats/boats.css';

function DeleteBoat() {
  const dispatch = useDispatch();
  const boats = useSelector((state) => state.boats.data);
  const loading = useSelector((state) => state.boats.loading);
  const error = useSelector((state) => state.boats.error);

  useEffect(() => {
    dispatch(fetchBoats());
  }, [dispatch]);

  const handleDelete = async (boatId) => {
    try {
      const response = await dispatch(fetchToDeleteBoats(boatId));
      if (response.payload) {
        toast.success('Boat successfully deleted');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Delete Boats</h2>

      {loading && <p>Loading...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          Error:
          {error}
        </div>
      )}

      {boats.length === 0 ? (
        <p>No boats to delete</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {boats.map((boat) => (
            <div key={boat.id} className="col">
              <div className="card mb-4 border-0">
                <div className="card-body">
                  <h5 className="card-title">
                    {boat.name}
                  </h5>
                  <img
                    src={boat.image}
                    alt="boatimage"
                    className="img-fluid mb-2"
                  />
                  <p className="card-text">
                    Description:
                    {boat.description}
                  </p>
                  <div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(boat.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default DeleteBoat;
