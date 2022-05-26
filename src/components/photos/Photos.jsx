import "./photos.scss";
import { useState } from "react";

export default function Photos() {
    // initial state is the first slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // includes the path to the image and the title of each photo slide
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

    // handleClick function for navigating from each slide
    // makes it so you can continuously go through the photo slides
    const handleClick = (way) =>{
        way === "left" 
        // if left - will move left if it isn't the first slide, or else it will go to last slide
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1)
        // if right - will move right if it isn't the last slide, or else it will go to first slide
        : setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0);
    }

    return <div className="photos" id="photos">
        <h1>Photo Gallery</h1>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {/* data items assigned to photo's title and image */}
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
        {/* when left/right arrows clicked, passes value into handleClick to change the currentSlide*/}
        <img src="assets/down-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/down-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>;
}
