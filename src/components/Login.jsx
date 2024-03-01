import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authSlice'; // Update path

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      dispatch(login(username));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">
          Username:
          <input type="text" id="usernameInput" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
