import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendReservation } from '../../redux/slices/reservationSlice';

function Reservation() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('nothing');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const user = localStorage.getItem('user');
  const currentUser = (JSON.parse(user));
  const [userId, setUserId] = useState(0);
  const [boatId, setBoatId] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (date.trim() && city.trim()) {
      setMessage('start');
      let obj = {
        user_id: userId, boat_id: boatId, date, city,
      };
      await dispatch(sendReservation(obj));
      obj = {};
      setMessage('done');
      document.location.href = '/';
    } else {
      setMessage('error');
    }
  };
  return (
    <div className="row">
      <div className="col-md-3"> </div>
      <form className="col-md-6">
        <h3 className="text-center text-secondary">Reservation form</h3>
        <div className="input-group mb-3 mt-3">
          User name :
          <input type="text" readOnly className="form-control" value={currentUser.name} />
        </div>
        <div className="input-group mb-3 mt-3">
          Boat ame :
          <input type="text" readOnly className="form-control" value={localStorage.getItem('boatname')} />
        </div>
        <div className="input-group mb-3 mt-3">
          date :
          <input
            type="date"
            className="form-control"
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="input-group mb-3 mt-3">
          City :
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => {
              setCity(e.target.value);
              setBoatId(localStorage.getItem('boatid'));
              setUserId(currentUser.id);
            }}
          />
        </div>
        <small>{message}</small>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
      <div className="col-md-3"> </div>
    </div>
  );
}

export default Reservation;
