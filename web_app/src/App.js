import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screenh-screen">
      <Header />
      <div className="p-5">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
