import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Headerbar from "../components/Headerbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";

const RouterComponent = () => {
  const location = useLocation();
  const checkingIncludePathName = ["/", "/login", "/signup"].includes(
    location.pathname
  );

  return (
    <>
      {checkingIncludePathName && <Headerbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testResult" element={<TestResult />} />
      </Routes>
    </>
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
