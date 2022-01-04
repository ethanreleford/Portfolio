import "./contact.scss"
import { useState } from "react"

export default function Contact() {

    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className = "contact" id="contact">
            <div className="left">
            <img src="./assets/tech.jpg" alt="" />
            </div>
            <div className="middle">
                <h2>Contact Me!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="Submit">Send</button>
                    {message && <span>Thanks, I will reply as soon as possible!</span>}
                </form>
            </div>
            <div className="rights">
                <img src="./assets/tech.jpg" alt="" />
            </div>
        </div>
    )
}
