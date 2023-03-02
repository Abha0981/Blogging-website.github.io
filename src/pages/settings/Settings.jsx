import "./settings.css"
import profileimage from "./image/profileimage.jpg"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingstitle">
          <span className="settingsupdatetitle">Update Your Account</span>
          <span className="settingsdeletetitle">Delete Your Account</span>
        </div>
        <form className="settingform">
          <label>Profile Picture</label>
          <div className="settingprofileimg">
            <img src={profileimage} alt="" className="ppimg"></img>
            <label htmlFor="fileinput">
              <i className="userpp fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileinput" style={{ display: "none" }} />
          </div>
          <label>John Walker</label>
          <input type="text" placeholder="Rayan Walker"></input>
          <label>Email</label>
          <input type="email" placeholder="rayanwalker@gmail.com"></input>
          <label>Password</label>
          <input type="password"></input>
          <button className="settingupdate">Update</button>
        </form>
      </div>
    </div>
  )
}
