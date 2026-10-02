import "./topbar.css";
import navproimg from './imagetopbar/profileimage.jpg'
import React from "react";
import { Link } from "react-router-dom";
export default function TopBar({ user }) {
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
                
            </div>
            <div className="topright">
                {
                    user ? (
                        <Link to="/settings" className="profilelink" aria-label="Open user settings">
                            <img className="Profileimg" src={navproimg} alt="User profile" />
                        </Link>
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