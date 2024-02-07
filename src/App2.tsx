import Private from './components/componentProps/Private';
import Profile from './components/componentProps/Profile';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import Counter from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
// import { User } from './components/state/User';

export function App2() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* <LoggedIn />
      <User /> */}

      {/* <Counter /> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* ---------component prop--------- */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}
