//---------- normal cliked button ----------
// type ButtonProps = {
//   handleClick: () => void;
// };

//---------- with event ------------

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    // <button
    //   onClick={props.handleClick}
    //   className="bg-cyan-500 rounded-md px-4 py-2 text-lg font-semibold uppercase"
    // >
    //   Click
    // </button>

    //--------------- with event---------------
    <button
      onClick={(event) => props.handleClick(event, 1)}
      className="bg-cyan-500 rounded-md px-4 py-2 text-lg font-semibold uppercase"
    >
      Click
    </button>
  );
};

export default Button;
