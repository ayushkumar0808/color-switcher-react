import React from "react";

export const Button = ({ color, children }) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};
