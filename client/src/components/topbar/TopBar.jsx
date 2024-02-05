import "./topbar.css";
import navproimg from './imagetopbar/profileimage.jpg'
import React from "react";
import { Link } from "react-router-dom";
export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topleft">
                <i className="logo fa-brands fa-blogger-b">LOG</i>

            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li className="toplistitem"><Link to='/about' className="link">About</Link></li>
                    <li className="toplistitem"><Link to='/write' className="link">Write</Link></li>
                </ul>
                <i className="searchicon fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="topright">
                {
                    user ? (
                        <img className="Profileimg" src={navproimg} alt=""></img>
                    ) : (

                        <ul className="toplist">
                            <li className="toplistitem">
                                <Link to='/login' className="link">Login</Link>
                            </li>

                            <li className="toplistitem">
                                <Link to='/register' className="link">Register</Link>
                            </li>

                        </ul>
                    )
                }

            </div>
        </div>
    )
}