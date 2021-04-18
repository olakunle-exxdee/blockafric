import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiFileListFill } from "react-icons/ri";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { BsGiftFill } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="lists">
        <li className="item">
          <Link to="/" className="links">
            <div className="link">
              <FaHome />
              <p>Home</p>
            </div>
          </Link>
        </li>
        <li className="item">
          <NavLink to="/activity" className="links">
            <div className="link">
              <RiFileListFill />
              <p>Activity</p>
            </div>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/wallet" className="links">
            <div className="link">
              <IoFileTrayStackedSharp />
              <p>Wallet</p>
            </div>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/market" className="links">
            <div className="link">
              <IoFileTrayStackedSharp />
              <p>Market</p>
            </div>
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/earn" className="links">
            <div className="link">
              <BsGiftFill />
              <p>Earn</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
