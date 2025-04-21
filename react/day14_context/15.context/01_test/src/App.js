import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./store/color";

const App = () => {
  return (
    <div>
      <ColorProvider>
        <SelectColors />
        <ColorBox />
      </ColorProvider>
    </div>
  );
};

export default App;
