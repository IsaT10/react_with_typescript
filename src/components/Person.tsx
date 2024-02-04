import { personProps } from './Person.types';

export function Person({ name: { first, last } }: personProps) {
  return (
    <div>
      {first} {last}
    </div>
  );
}
