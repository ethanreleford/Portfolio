import "./about.scss"

export default function About() {

    return (
        
        <div className = "about" id="about">
            <img id = "earth"src="./assets/earth-icon.png" alt="earthimg" />
            <img id = "sun"src="./assets/sun.png" alt="sunimg" />
            <div id="oval"></div>
            <div className="container">
                <div className="box">
                    <h3>ABOUT ME</h3>
                    <div className="content">
                        <p>Hi, my name is Ethan Releford and thanks for visiting my website.
                        I am junior at the University Of Central Florida studying computer science.
                        I am also self teaching the use of web development frameworks as
                        that is what I enjoy the most.
                        </p>
                    </div>
                        
                </div>
                <div className="box">
                    <h3>GOALS</h3>
                     <div className="content">
                        <p>Right now I am looking for any opportunity to increase my skills
                        in web develpment whether it be an intership during the summer or a part time job.
                        </p>
                    </div>
                </div>
                <div className="box">
                    <h3>HOW WILL I ACHIEVE</h3>
                     <div className="content">
                        <p>My plan to achieve this goal is to create a portfolio while in university
                        that involves personal and class projects but for now I mostly will have 
                        personal projects that will scale in diffiiculty with the more I create
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
