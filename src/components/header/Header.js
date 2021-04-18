import React from "react";
import "../../App.css";

import { BiPlusMedical } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
const Header = () => {
  return (
    <div className="header">
      <header>
        <h1>
          <BiPlusMedical />
          Ribbon
        </h1>
        <div className="notify">
          <IoPersonCircle />
          <IoMdNotifications />
        </div>
      </header>
      <div className="box">
        <div className="afya">
          <div className="afya-content">
            <h3>afya</h3>
          </div>
          <h2>143.00</h2>
          <p>balance</p>
        </div>
        <div className="afya">
          <div className="afya-content">
            <h3 className="zar">zar</h3>
          </div>
          <h2>R21.00</h2>
          <p>Equilvalent</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
