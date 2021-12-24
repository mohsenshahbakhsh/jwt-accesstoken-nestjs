import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Body from "./components/Body";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="p-5">
        <Body />
      </div>
    </div>
  );
}

export default App;
