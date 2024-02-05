import { useState } from 'react';

export function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log out</button>
      <h3>User is {isLoggedIn ? 'logged in' : 'logged out'}</h3>
    </div>
  );
}
