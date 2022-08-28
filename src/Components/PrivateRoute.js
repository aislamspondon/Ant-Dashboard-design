import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const currentUser = {
    username: "admin",
    password: "admin",
  };

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
