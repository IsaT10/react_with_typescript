import { Name } from './Person.types';

type personListProps = {
  names: Name[];
};

export function PersonList(props: personListProps) {
  return (
    <div>
      {/* <h2>
        {props.names[0].first} {props.names[0].last}
      </h2>
      <h2>
        {props.names[1].first} {props.names[1].last}
      </h2>
      <h2>
        {props.names[2].first} {props.names[2].last}
      </h2> */}
      {props.names.map((name, i) => {
        return (
          <h2 key={i}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}
