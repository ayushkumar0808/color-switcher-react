export const Button = ({ color, fn, children }) => {
  return (
    <button onClick={() => fn(color)} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};
