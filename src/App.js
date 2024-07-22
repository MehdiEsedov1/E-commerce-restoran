import "./styles/_main.scss";

import Header from "./components/Header";
import Routess from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          width: "100%",
          height: "75px",
        }}
      ></div>
      <Routess />
    </div>
  );
}

export default App;
