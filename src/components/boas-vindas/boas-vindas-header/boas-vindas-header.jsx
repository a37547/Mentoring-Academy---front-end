import React from "react";
import IPBBranco from "../../../assets/IPB-Branco.png";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <a href="#intro" className="scrollto">
            <img src={IPBBranco} alt="IPB" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
