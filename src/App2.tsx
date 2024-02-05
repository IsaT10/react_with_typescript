import Counter from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

export function App2() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* <LoggedIn />
      <User /> */}
      <Counter />
    </div>
  );
}
