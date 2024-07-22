import "./styles/app.css";
import "./styles/adds.css";
import "./styles/homepage.css";
import "./styles/footer.css";
import "./styles/menu.css";
import "./styles/registration.css";
import "./styles/dropdownmenu.css";
import "./styles/about.css";
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
