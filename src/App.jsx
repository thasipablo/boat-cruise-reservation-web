import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './redux/store';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Provider store={store}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </Provider>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="w-25"> </div>
          <div className="ps-3"> Content in this div</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
