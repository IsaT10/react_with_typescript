type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// export function Input(props: InputProps) {
//   return (
//     <input value={props.value} type="text" onChange={props.handleChange} />
//   );
// }

//----------destructure props

export function Input({ value, handleChange }: InputProps) {
  return <input value={value} type="text" onChange={handleChange} />;
}
