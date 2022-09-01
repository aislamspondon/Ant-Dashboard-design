import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const currentUser = 'admin'
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
