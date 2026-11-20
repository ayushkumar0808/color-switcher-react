export const Box = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className=" h-100 m-8 content-center rounded-2xl text-black border-2"
    >
      {color}
    </div>
  );
};
