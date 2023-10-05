import React from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Cursor from "./components/Cursor";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App text-heading">
      <Scrollbar>
        <Cursor />
        <Nav />
        <Home />
        <About />
        <Projects />
        <Skill />
        <Contact />
      </Scrollbar>
    </div>
  );
}

export default App;
