const Button = ({
  backgroundColor,
  fontSize,
}: {
  backgroundColor: string;
  fontSize: number;
}) => {
  return (
    <button className="bg-[] rounded-md px-5 py-2.5 text-lg font-semibold uppercase">
      Click
    </button>
  );
};

export default Button;
