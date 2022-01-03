import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import User from "./components/User";

function App() {
  return (
    <div className="w-screenh-screen">
      <Header />
      <div className="p-5">
        <User />
      </div>
      <Footer />
    </div>
  );
}

export default App;
