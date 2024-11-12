import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user.name || 'Guest'}!</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
