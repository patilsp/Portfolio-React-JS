import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="Container">
          <Navbar />
          <Intro />
      </div>
    </div>
  );
}

export default App;
