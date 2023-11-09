// import React from 'react'
import "./topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                {/* LEFT SIDE */}
                <div className="left">
                    {/* click KMK logo to be redirected to Intro (top) page*/}
                    <a href="#intro" className="logo">
                        KMK
                    </a>
                    {/* uses icons from @material-ui/icons website */}
                    <div className="itemCointainer">
                        <PersonIcon className="icon" />
                        <span>+1 650 722 1202</span>
                    </div>
                    <div className="itemCointainer">
                        <MailIcon className="icon" />
                        <span>kevin.m.king@icloud.com</span>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="right">
                    {/* hamburger sliding menu setMenuOpen becomes True 
                        since menuOpen was initially false*/}
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