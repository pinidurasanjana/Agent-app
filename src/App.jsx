import Navbar from "./components/navbar/navbar";
import "./layout.scss";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
