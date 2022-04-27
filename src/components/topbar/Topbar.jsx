// import React from 'react'
import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        KMK
                    </a>
                    <div className="itemCointainer">
                        <Person className="icon" />
                        <span>+1 650 722 1202</span>
                    </div>
                    <div className="itemCointainer">
                        <Mail className="icon" />
                        <span>kevin.m.king@icloud.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}