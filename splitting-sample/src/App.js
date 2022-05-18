import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//import notify from "./notify";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

// eslint-disable-next-line no-undef
//const SplitMe = React.lazy(() => import("./SplitMe"));
// React.~ 문법적용이 안됨.. 버전문제?

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
