import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
