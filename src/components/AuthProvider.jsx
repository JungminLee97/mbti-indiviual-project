import { useState } from "react";
import AuthContext from "../context/AuthContext";

const token = localStorage.getItem("accessToken");

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const signin = (token) => {
    localStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };

  const signout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
