import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>
        Welcome,
        {user.username}
        !
      </h1>
      <p>This is your home page.</p>
    </div>
  );
}

export default Home;
