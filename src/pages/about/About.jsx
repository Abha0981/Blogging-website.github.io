import "./about.css"
import user from "./image/profileimage.jpg"
import React from "react";
export default function About() {
    return (
        <div className='About'>
            <div className='aboutimage'>
                <img src={user} alt="" className="aboutpersonimage"></img>
                <p className="aboutfoundername"><b>John Walker</b></p>
                <p className="aboutimagefounder"><b>Founder and CEO of Blog</b></p>
                <p className="aboutimagequotes">Your first blog posts won't be perfect,<br></br>but you just have to do it.<br></br> You have to start somewhere.</p>
            </div>
            <div className="aboutpara">
                <div className='aboutintro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet libero a nisi placeat. Eligendi eius quia quo amet eos. Accusamus dolores cum provident blanditiis consequuntur veniam dicta recusandae ipsum quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates sunt, tempora dolore consequatur repellendus in reiciendis aut, culpa modi ipsam facilis, dolor porro at ipsum aperiam voluptas deserunt exercitationem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita veritatis error autem dicta voluptatibus excepturi facilis doloribus, ducimus adipisci rerum. Obcaecati quia sapiente atque consequuntur facilis possimus repudiandae doloremque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus odit id nisi, sint magnam voluptates nesciunt, ex sit nostrum fugit impedit, quam voluptatum magni accusantium cumque quia ipsa ipsam.<br></br><br></br> Sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim tempora non illum quidem nisi sint ipsa illo porro voluptas, veritatis nihil, sed vitae velit, facilis minus iure. Cumque, quaerat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt fuga et consequatur itaque cupiditate! Vitae enim fugiat culpa repudiandae sit deserunt rem odit quam, nesciunt saepe, tempore doloremque a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto nobis sint exercitationem, quo provident. Quae necessitatibus dolorem quam incidunt molestiae voluptatem rerum id tempore quia dolores! Maxime, aut odit!</div>
            </div>
        </div>
    )
}
