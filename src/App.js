import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import Nav from "./components/Nav";
import PrivateRoute from "./route/PrivateRoute";
import api from "./utils/api.js";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 토큰을 통해 유저 정보를 가져온다.
  const getUser = async () => {
    try {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        const response = await api.get("user/me");
        setUser(response.data.user);
      }
    } catch (err) {
      setUser(null);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token"); // 토큰 삭제
    setUser(null); // 상태 초기화
    navigate("/login"); // 로그인 페이지로 이동
  };

  // 웹사이트 시작하자마자 user 체크하기!
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Nav user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute user={user}>
              <TodoPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/login"
          element={<LoginPage setUser={(user, setUser)} />}
        />
      </Routes>
    </>
  );
}

export default App;
