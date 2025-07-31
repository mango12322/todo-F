import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
      <div className="navbar-left">
        <Link
          to="/"
          className="navbar-brand fw-bold fs-4 text-dark text-decoration-none"
        >
          TodoList
        </Link>
      </div>

      <div className="navbar-right d-flex align-items-center">
        {user ? (
          <>
            <span className="me-3 fw-semibold text-success">
              {user.name}님, 환영합니다!
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-outline-danger btn-sm"
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-primary btn-sm me-2">
              로그인
            </Link>
            <Link to="/register" className="btn btn-outline-success btn-sm">
              회원가입
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
