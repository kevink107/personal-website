import "./photos.scss";
import { useState } from "react";

export default function Photos() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: 1,
            icon: "./assets/family.jpeg",
            title: "Family",
        },
        {
            id: 2,
            icon: "./assets/dogs.JPG",
            title: "Dogs",
        },
        {
            id: 3,
            icon: "./assets/rugby2.jpeg",
            title: "Rugby",
        },
    ];

    const handleClick = (way) =>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: 2)
        : setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0);
    }

    return <div className="photos" id="photos">
        <h1>Photo Gallery</h1>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {data.map(d=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <h2>{d.title}</h2>
                        </div>
                        <div className="right">
                            <img src={d.icon} alt=""></img>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <img src="assets/down-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/down-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>;
}
