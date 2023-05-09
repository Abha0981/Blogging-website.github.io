import "./settings.css"
import profileimage from "./image/profileimage.jpg"
import React from "react";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account</span>
        </div>
        <form className="settingform">
          <div className="settingprofileimg">
            <img src={profileimage} alt="" className="ppimg"></img>
            <label htmlFor="fileinput">
              <i className="userpp fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>Name</label>
          <input type="text" placeholder="Rayan Walker"></input><br />
          <label>Email</label>
          <input type="email" placeholder="rayanwalker@gmail.com"></input><br />
          <label>Password</label>
          <input type="password"></input>
          <button className="settingupdate">Update</button>
        </form>
      </div>
    </div>
  )
}
