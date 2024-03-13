import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='overflow-hidden'>
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
