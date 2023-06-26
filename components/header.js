import React from 'react';
import "../css/header.css";
import logo from "../img/main-logo.svg"

const Header = ()=>{
  return (
    <header>
      <img src={logo} className="logotip" />
      <div className="rightsideofheader">
        <i className="fa fa-exclamation-triangle triangle"></i>
        <i className="fa fa-user-circle user"></i>
        <div className="exit">
        <i class="fa fa-power-off power"></i>
        <p className="txt">Выход</p>
        </div>
      </div>
    </header>
  )
}
export default Header;