import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  );
}

export default App;
