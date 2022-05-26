import './App.scss';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Courses from "./components/courses/Courses";
import Menu from "./components/menu/Menu";
import Photos from "./components/photos/Photos";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      {/* menuOpen is initially false for both Topbar and Menu */}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* Each section in the website */}
      <div className="sections">
        <Intro/>
        <Works/>
        <Courses/>
        <Photos/>
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default App;
