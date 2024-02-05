import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export function User() {
  //when itial value is different from future value

  //   const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () =>
    setUser({
      name: 'Rakib',
      email: 'rakib@gmail.com',
    });

  //   const handleLogOut = () => setUser(null);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogOut}>Log out</button> */}
      <h3>User name is {user.name}</h3>
      <h3>User email is {user.email}</h3>
    </div>
  );
}
