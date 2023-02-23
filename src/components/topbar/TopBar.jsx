import "./topbar.css";
import user from './imagetopbar/profileimage.jpg'

export default function TopBar() {
    return (
        <div className="top">
            <div className="topleft">
                <i className="logo fa-brands fa-blogger-b">LOG</i>

            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">Home</li>
                    <li className="toplistitem">About</li>
                    <li className="toplistitem">Write</li>
                </ul>
                <i className="searchicon fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="topright">
                <img className="Profileimg" src={user} alt=""></img>
            </div>
        </div>
    )
}