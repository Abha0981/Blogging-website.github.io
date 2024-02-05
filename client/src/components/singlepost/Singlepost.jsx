import "./singlepost.css"
import img3 from './imagepost/singlepostimg.jpg'
import React from "react";
export default function Singlepost() {
    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                <img src={img3} className="singlepostimg" alt=""></img>
                <h1 className="posttitle">Use of robotocis nowdays
                    <div className="singlepostedit">
                        <i className="singleposticon fa-solid fa-pen-to-square"></i>
                        <i className="singleposticon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author: <b>Elon Musk</b></span>
                    <span className="singlepostdate">1 day ago</span>
                </div>
                <p className="singlepostdes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugit molestiae exercitationem explicabo iusto corrupti mollitia autem doloremque omnis assumenda distinctio, cumque qui soluta! Exercitationem unde laudantium ipsum necessitatibus natus Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magnam pariatur esse temporibus quibusdam, minima ipsam tenetur aut, at quos, vero ratione neque? Sed velit placeat aspernatur temporibus deserunt iure!<br></br><br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto ipsam? Nostrum cupiditate sapiente quasi sequi quisquam alias, eaque amet, repellendus delectus distinctio numquam praesentium molestiae assumenda placeat minima fuga Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem magni officia cupiditate ipsam molestias praesentium, aliquid quam natus nesciunt iusto ullam porro eligendi repellendus necessitatibus voluptate. Illo, dolorem quos!Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto ipsam? Nostrum cupiditate sapiente quasi sequi quisquam alias, eaque amet, repellendus delectus distinctio numquam praesentium molestiae assumenda placeat minima fuga Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem magni officia cupiditate ipsam molestias praesentium, aliquid quam natus nesciunt iusto ullam porro eligendi repellendus necessitatibus voluptate. Illo, dolorem quos!Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto ipsam? Nostrum cupiditate sapiente quasi sequi quisquam alias, eaque amet, repellendus delectus distinctio numquam praesentium molestiae assumenda placeat minima fuga Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem magni officia cupiditate ipsam molestias praesentium, aliquid quam natus nesciunt iusto ullam porro eligendi repellendus necessitatibus voluptate. Illo, dolorem quos!Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto ipsam? Nostrum cupiditate sapiente quasi sequi quisquam alias, eaque amet, repellendus delectus distinctio numquam praesentium molestiae assumenda placeat minima fuga Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem magni officia cupiditate ipsam molestias praesentium, aliquid quam natus nesciunt iusto ullam porro eligendi repellendus necessitatibus voluptate. Illo, dolorem quos!Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto ipsam? Nostrum cupiditate sapiente quasi sequi quisquam alias, eaque amet, repellendus delectus distinctio numquam praesentium molestiae assumenda placeat minima fuga Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem magni officia cupiditate ipsam molestias praesentium, aliquid quam natus nesciunt iusto ullam porro eligendi repellendus necessitatibus voluptate. Illo, dolorem quos!</p>

            </div>
        </div>
    )
}
