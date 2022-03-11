import "./topbar.scss";
import { PhoneIphone, Email, LinkedIn, GitHub } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar  " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className="logo" href="#intro" >
            Welcome
          </a>
          <div className="itemContainer">
            <PhoneIphone className="icon" />
            <span>+954 789 3017</span>
          </div>
          <div className="itemContainer">
            <Email className="icon"/>
            <span>ethanrele@gmail.com</span>
          </div>
            <div className="itemContainer">
            <LinkedIn className= "icon Linked"/>
            <a className="link" href="https://www.linkedin.com/in/ethan-releford-2aa104214/"  target="_blank"  >
            LinkedIn
            </a>
            </div>
            <div className="itemContainer">
            <GitHub className= "icon Linked"/>
            <a className="link" href="https://github.com/ethanreleford" target="_blank">
            GitHub
            </a>
            </div>
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
