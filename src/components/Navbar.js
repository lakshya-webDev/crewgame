import React from "react";
import logo from "../images/logo2.svg";
import claw from "../images/claw.svg";
import icon2 from "../images/icon2.svg";


const  Navbar =() =>{
  return (
    <div>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo}></img>
          </a>
          <div>
            <img src={claw} />
            <font className="navbarfont"> 240 claws &nbsp;&nbsp;</font>&nbsp;
            <img src={icon2} />
            &nbsp;
            <font className="navbarfont">
              {" "}
              028j...3k45 &nbsp;<i className="arrow down"> </i>{" "}
            </font>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
