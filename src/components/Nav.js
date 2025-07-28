import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">TotoList</a>
      </div>
      <div className="navbar-right">
        <a href="/login">로그인</a>
        <a href="/register">회원가입</a>
      </div>
    </nav>
  );
};

export default Navbar;
