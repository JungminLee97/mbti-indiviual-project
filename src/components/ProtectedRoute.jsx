import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isAuthenticated }) => {
  !isAuthenticated ? (
    <Navigate to="/login" replace />
  ) : (
    <Navigate to="/profile" replace />
  );

  return <Outlet />;
};

export default ProtectedRoute;
