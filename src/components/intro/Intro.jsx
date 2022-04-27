// import React from 'react'
// import { init } from "ityped"
// import { useEffect, useRef } from "react"
import "./intro.scss"



export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="../assets/profile-photo.png" alt=""/>
                </div>
            </div>
                
            <div className="right">
                <div className="wrapper">
                    <h2>About Me</h2>
                    <h1>Kevin King</h1>
                    <h3>Computer Science and Engineering Student at Dartmouth <span></span></h3>
                    <body>
                        Hi, my name is Kevin King. I was born in Hong Kong to American expat parents,
                        but we eventually moved back to the Bay Area when I was eleven years old. I'm 
                        currently a sophomore at Dartmouth College, where I'm majoring in Computer Science
                        and minoring in Engineering Sciences. I am also a member of the Dartmouth Rugby
                        Football Club, Dartmouth Investment and Philanthropy Program (DIPP), and Student 
                        Entrepreneurship Education and Discovery (SEED). In my free time, I enjoy spending
                        time with my three dogs, working out, and spending time with my family and friends.
                    </body>
                    {// refer to video at around 1:15:00 for text typing animation
                    }
                </div>
                <a href="#works">
                    <img src="../assets/down-arrow.png" alt=""/>
                </a>
            </div>
        </div>
    )
}