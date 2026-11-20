import "./App.css";
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
    "black",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "navy",
    "teal",
    "maroon",
    "olive",
    "gold",
    "silver",
    "violet",
  ];

  return (
    <>
      <h1>🎨 Color Switcher</h1>
      <div className="flex gap-4 flex-wrap">
        {colorsArr.map((item) => (
          <Button key={item} color={item}>
            {item}
          </Button>
        ))}
      </div>
    </>
  );
}

export default App;
