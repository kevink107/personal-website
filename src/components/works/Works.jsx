// import React from 'react'
import { useEffect, useState } from "react";
import "./works.scss";
import WorksList from "../worksList/WorksList";
import { profiles, contentPortfolio } from "../../data";


export default function Works() {
    const [selected, setSelected] = useState("featured");
    const [data, setdata] = useState([]);

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
                {list.map(item => (
                    <WorksList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                        link={item.link}
                    />
                ))}
            </ul>
            <div className="container">
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