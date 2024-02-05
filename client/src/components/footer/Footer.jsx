import "./footer.css"
import React from "react";
export default function Footer() {
  return (
    <div className="footer">
      <span className="copyrightsreserved">All rights are Reserved </span>
      <span>
        <i className="copyrighticon fa-regular fa-copyright"></i>
      </span>
      <span className="year"> copyright {new Date().getFullYear()} </span>{/*2023*/}
    </div>
  )
}
