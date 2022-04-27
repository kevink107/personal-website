// import React from 'react'
import "./contact.scss"
import { useEffect, useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent from redirecting to random place
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Message_%28Send%29.png" 
                    alt=""
                />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>

            </div>
        </div>
    )
}
