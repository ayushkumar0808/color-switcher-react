import { useState } from "react";
import "./App.css";
import { Box } from "./component/Box";
import { Button } from "./component/Button";

function App() {
  const colorsArr = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "maroon",
    "olive",
    "gold",
    "silver",
    "violet",
  ];

  const [color, setColor] = useState("transparent");

  return (
    <>
      <h1>🎨 Color Switcher</h1>
      <div className="flex gap-4 flex-wrap ml-4 mt-5">
        {colorsArr.map((item) => (
          <Button fn={setColor} key={item} color={item}>
            {item}
          </Button>
        ))}
      </div>

      <Box color={color} />
    </>
  );
}

export default App;
