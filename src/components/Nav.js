import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">TotoList</a>
      </div>
      <div className="navbar-right">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger ms-2"
          >
            로그아웃
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline-primary ms-2">
            로그인
          </Link>
        )}
        <a href="/register">회원가입</a>
      </div>
    </nav>
  );
};

export default Navbar;
