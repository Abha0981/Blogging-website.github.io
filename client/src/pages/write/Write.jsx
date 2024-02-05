import './write.css'
import writeimg1 from './image/architechural design.jpg'
import React from "react";
export default function Write() {
    return (
        <div className="write">
            <img src={writeimg1} alt='' className='writeimg'></img>
            <form className='writeform'>
                <div className='writeformgroup'>
                    <label htmlFor='fileinput'>
                        <i class="writeicon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileinput" style={{ display: "none" }}></input>
                    <input type='text' placeholder='Title' className='writeinput title' autoFocus={true}></input>
                </div>
                <div className='writeformgroup wrtingarea'>
                    <textarea placeholder='Write your own Blog...' type='text' className='writeinput writetext'></textarea>
                </div>
                <button className='submit'>Publish</button>
            </form>
        </div>
    )
}