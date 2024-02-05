import "./header.css"
import headimg from './imageheader/headerimg.jpg'
import React from "react";
export default function Header() {
    return (
        <div className="header">
            <div className="headertitle">
                <span className="headertitlest">Blogging is a conversation, not a code</span>
                <span className="headertitlelg">Blog</span>
            </div>
            <img className="headerimg" src={headimg} alt=""></img>
        </div>
    )
}
