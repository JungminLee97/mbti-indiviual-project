import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Headerbar from "../components/Headerbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import ProtectedRoute from "../components/ProtectedRoute";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// const ProtectedRouteSecondMethods  = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
// };

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/profile" />;
};

const RouterComponent = ({ isAuthenticated }) => {
  return (
    <Routes>
      <Route element={<Headerbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/signup" element={<PublicRoute element={Signup} />} />
      </Route>
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testResult" element={<TestResult />} />
      </Route>
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
};

export default Router;
