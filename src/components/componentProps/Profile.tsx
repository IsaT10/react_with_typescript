export type ProfileProps = {
  name: string;
};

export default function Profile({ name }: ProfileProps) {
  return <div>My name is {name}</div>;
}
