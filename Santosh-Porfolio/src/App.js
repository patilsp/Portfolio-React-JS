import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";

import './App.css'
function App() {
  return (
    <div className="App">
      <div className="Container">
          <Navbar />
          <Intro />
          <Services />
      </div>
    </div>
  );
}

export default App;
