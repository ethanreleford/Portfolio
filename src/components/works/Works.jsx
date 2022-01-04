import "./works.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { useState } from "react"


export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
        id:1,
        title: "JavaScript, CSS, & HTML",
        desc: "- Currently self taught on these skills and imporving with Every Project I finish.",
        img: "./assets/soft.png",

    },
     {
        id:2,
        title: "Upcoming #2",
        desc: "Future Project",
        img: "./assets/inprogress.jpg"
    },
     {
        id:3,
        title: "Upcoming #3",
        desc: "Future Project",
        img: "./assets/inprogress.jpg"
    },
     {
        id:4,
        title: "Upcoming #4",
        desc: "Future Project",
        img: "./assets/inprogress.jpg"
    },
     {
        id:5,
        title: "Upcoming #5",
        desc: "Future Project",
        img: "./assets/inprogress.jpg"
    },
     {
        id:6,
        title: "Upcoming #6",
        desc: "Future Project",
        img: "./assets/inprogress.jpg"
    },
];

const handleClick = (way)=>{
  way === "left" 
  ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1)
  : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
};

  return (
    <div className="works" id="works">
      <div 
      className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)`  }}>
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Click Here For Project</span>
              </div>
            </div>
            <div className="right">

              <img src={d.img} height="400" width="1000"alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <ArrowBackIos className="left arrow color" />
      <ArrowBackIos className="right arrow color"  />
      <ArrowBackIos className="right arrow" onClick={()=>handleClick("right")}/>
      <ArrowBackIos className="left arrow" onClick={()=>handleClick("left")}/>
    </div>
  );
}
