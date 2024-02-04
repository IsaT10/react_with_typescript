type greetProps = {
  name: string;
  message?: number; //optional props
  isLoggedIn: boolean;
};

export function Greet(props: greetProps) {
  return (
    <>
      <h2 className="text-stone-800 text-center font-semibold text-xl ">
        {props.isLoggedIn
          ? ` Hi ${props.name}.You have ${props.message} unread message`
          : 'Welcome guest'}
      </h2>
    </>
  );
}
