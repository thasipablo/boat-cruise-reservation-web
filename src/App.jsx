import React from 'react';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <Home /> : <Login />}
    </div>
  );
}

export default App;
