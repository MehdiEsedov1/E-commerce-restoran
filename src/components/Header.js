import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Dropdownmenu from "./Dropdownmenu.js";
export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img className="logo" src={logo} alt="Hamburger" />
        </Link>
        <div className="pages">
          <Link to="/">HOME</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/about">ABOUT</Link>
        </div>
        <div className="side-bar">
          <Dropdownmenu />
          <Link to="/basket">
            <ShoppingBasketIcon
              sx={{
                fontSize: "2.7rem",
                color: "white",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
