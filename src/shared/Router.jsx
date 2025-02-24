import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Headerbar from "../components/Headerbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
// import ProtectedRoute from "../components/ProtectedRoute";

// const ProtectedRouteSecondMethods  = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
// };

const RouterComponent = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const PublicRoute = ({ element: Element, ...rest }) => {
    return !isAuthenticated ? (
      <Element {...rest} />
    ) : (
      <Navigate to="/profile" /> // 로그인 상태일 때 프로필 페이지로 리디렉션
    );
  };
  const UnPublicRoute = ({ element: Element, ...rest }) => {
    return isAuthenticated ? (
      <Element {...rest} />
    ) : (
      <Navigate to="/login" /> // 로그인 상태일 때 프로필 페이지로 리디렉션
    );
  };

  return (
    <Routes>
      <Route element={<Headerbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/signup" element={<PublicRoute element={Signup} />} />

        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}> */}
        <Route path="/profile" element={<UnPublicRoute element={Profile} />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testResult" element={<TestResult />} />
        {/* </Route> */}
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
