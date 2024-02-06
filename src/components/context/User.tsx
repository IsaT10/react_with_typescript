import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({ name: 'Rakib', email: 'rakib@example.com' });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Log out</button>

      <p>User name is {userContext?.user?.name}</p>
      <p>User email is {userContext?.user?.email}</p>
    </div>
  );
}
