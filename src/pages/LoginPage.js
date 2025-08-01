import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import api from "../utils/api";

const LoginPage = ({ user, setUser }) => {
  // 1. useState email, pw 만들기
  // 2. api로 email, pw 비교하기
  // 3. 틀릴 시 에러
  // 4. 맞을 시 토큰 저장하기
  // 5. 할 일 페이지로 이동하기
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/user/login", { email, password });
      if (response.status === 200) {
        setUser(response.data.user);
        sessionStorage.setItem("token", response.data.token);
        api.defaults.headers["authorization"] = "Bearer " + response.data.token;
        setError("");
        navigate("/");
      }
    } catch (err) {
      console.error("로그인 실패:", err.response?.data || err.message);
      setError(err.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="display-center">
      <Form className="login-box" onSubmit={handleLogin}>
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <div className="button-box">
          <Button type="submit" className="button-primary">
            Login
          </Button>
          <span>
            계정이 없다면? <Link to="/register">회원가입 하기</Link>
          </span>
        </div>
        {error && <div className="red-err mt-2">{error}</div>}
      </Form>
    </div>
  );
};

export default LoginPage;
