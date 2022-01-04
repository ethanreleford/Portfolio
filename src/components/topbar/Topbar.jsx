import "./topbar.scss";
import { PhoneIphone, Email, LinkedIn, GitHub } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar  " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Welcome!
          </a>
          <div className="itemContainer">
            <PhoneIphone className="icon" />
            <span>+954 789 3017</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>ethanrele@gmail.com</span>
          </div>
            <a href="https://www.linkedin.com/in/ethan-releford-2aa104214/"  target="_blank"  >
            <div className="itemContainer">
            <LinkedIn className= "icon Linked"/>
            <span>LinkedIn</span>
            </div>
            </a>
            <a href="https://github.com/ethanreleford" target="_blank">
            <div className="itemContainer">
            <GitHub className= "icon Linked"/>
            <span>GitHub</span>
            </div>
            </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
