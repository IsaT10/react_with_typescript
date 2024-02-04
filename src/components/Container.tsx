type ContainerProps = {
  textSize: string;
};

export function Container(props: ContainerProps) {
  return (
    <div
      className={`${props.textSize} border-2 p-6 border-cyan-300 rounded-md`}
    >
      Container
    </div>
  );
}
