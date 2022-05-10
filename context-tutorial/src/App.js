import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/color";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <ColorProvider value={{ color: "red" }}>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
