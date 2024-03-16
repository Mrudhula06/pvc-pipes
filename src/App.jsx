import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
