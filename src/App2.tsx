import List from './components/Generic/List';
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
      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* generic */}
      <List items={['table', 'chair']} onClick={(item) => console.log(item)} />
      <List items={[1, 2]} onClick={(item) => console.log(item)} />

      <List
        items={[
          {
            first: 'Rakib',
            last: 'Uddin',
          },
          {
            first: 'Jhon',
            last: 'Doe',
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}
