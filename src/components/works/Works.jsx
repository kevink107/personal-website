// import React from 'react'
import { useEffect, useState } from "react";
import "./works.scss";
import WorksList from "../worksList/WorksList";
import { profiles, contentPortfolio } from "../../data";


export default function Works() {
    // initial state is the Profiles in Works
    const [selected, setSelected] = useState("profiles");
    // initial state of the data is empty array
    const [data, setdata] = useState([]);

    // initial list with items only containing titles
    const list = [
        {
            id: "profiles",
            title: "Profiles",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    // sets "selected" dependency to the correct data
    useEffect(() => {

        switch(selected){
            case "profiles":
                setdata(profiles);
                break;
            case "content":
                setdata(contentPortfolio);
                break;
            default:
                setdata(profiles);
        }

    }, [selected]) // becomes the dependency

    return (
        <div className="works" id="works">
            <h1>Works</h1>
            <ul>
                {/* list items get mapped to a WorksList item (which styles each item) */}
                {list.map(item => (
                    <WorksList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {/* data items get mapped to a hyperlink, image/logo, and title */}
                {data.map(d=>(
                    <a
                    href={d.link}>
                    <div className="item">
                        <img 
                            src={d.img}
                            alt=""/>
                    <h3>{d.title}</h3>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    )
}