import React from "react";
import logo from "./logo2.svg";
import claw from "./claw.svg";
import icon2 from "./icon2.svg";
import "./index.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src={logo}></img>
          </a>
          <div>
            <img src={claw} />
            <font className="navbarfont"> 240 claws &nbsp;&nbsp;</font>&nbsp;
            <img src={icon2} />
            &nbsp;
            <font className="navbarfont">
              {" "}
              028j...3k45 &nbsp;<i class="arrow down"> </i>{" "}
            </font>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
