import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './pages/Home';
import AddNewBoat from './components/boats/AddNewBoat';
import AddReservation from './components/reservations/AddReservation';
import MyReservations from './components/reservations/MyReservations';
import DeleteBoat from './components/boats/DeleteBoat';

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/reservation" element={<AddReservation />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/new-boat" element={<AddNewBoat />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="/delete-boat" element={<DeleteBoat />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
