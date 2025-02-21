import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headerbar from "../components/Headerbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import ProtectedRoute from "../components/ProtectedRoute";
const RouterComponent = () => {
  const isAuthenticated = false;

  return (
    <Routes>
      <Route element={<Headerbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
