// import Button from './components/Button';
import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';

import Button from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  const name = { first: 'Rakib', last: 'Uddin' };
  // const listOfName = [
  //   { first: 'Bruce', last: 'Wayne' },
  //   { first: 'Tom', last: 'Hardy' },
  //   { first: 'Robert', last: 'Patinson' },
  // ];
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* <Greet name="Rakib" message={20} isLoggedIn={false} />
      <Button backgroundColor="red" fontSize={24} />
      <Person name={name} />
      <PersonList names={listOfName} /> */}
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Rakib </Heading>
      </Oscar>
      {/* <Greet name="Rakib" isLoggedIn={false} /> //optional props validation */}

      {/*--------- button and input state ----------*/}
      {/* <Button handleClick={() => console.log('Button clicked')} /> */}

      {/* -------- button with event --------- */}
      {/* <Button
        handleClick={(event, id) => console.log('Button clicked', event, id)}
      /> */}

      {/* --------- Input ---------- */}
      {/* <Input value=" " handleChange={(event) => console.log(event)} /> */}

      {/* ---------style props --------- */}
      {/* <Container textSize="text-2xl" /> */}

      {/* ---------- some tips about props ---------- */}
      <Input value=" " handleChange={(event) => console.log(event)} />

      <Person name={name} />
    </div>
  );
}

export default App;
