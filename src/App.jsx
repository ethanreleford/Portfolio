import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react"


function App() {



  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>

        <About/>

      </div>
      .sections
      sec -intro -portfolio -work -about -contact me
    </div>
  );
}

export default App;
