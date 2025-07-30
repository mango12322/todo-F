import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  return user ? children : <Navigate to={"/login"} />;
};

// user 값이 있으면?? <Todopage/>  => 다양하게 쓰이기 위해 자식 사용
// 없다면 ?? redirect to /login

export default PrivateRoute;
