import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
import { ArrowBackIos } from "@material-ui/icons";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            backSpeed: 75,
            showCursor: true,
            strings: ["Developer", "Designer", "Content Creator" ] })
    },[])

    return (
        <div className = "intro" id= "intro">
             <div className="left">
                <div className="imgContainer">
                    <img src="assets/etans.png" alt=""/>
                </div>
             </div>
             <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Ethan</h1>
                    <h3>Self-Taught Web <span ref = {textRef}></span></h3>
                </div>
                <a href = "#portfolio">
                    <ArrowBackIos className="img" />
                    </a>
             </div>
        </div>
    )
}
