import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import { getUserProfile } from "../api/auth";

const Headerbar = () => {
  const { isAuthenticated, signout, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const LogoutHandle = async () => {
    const getUsers = getUserProfile(token);
    signout(getUsers.accessToken);
    navigate("/login");
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
          <div
            className="flex justify-between items-center bg-green-300 p-[15px]
      font-bold text-[20px]"
          >
            <Link to={"/"}>
              <p className=" ml-[20px]">홈 </p>
            </Link>
            <Link to={"/login"}>
              <p className="mr-[20px]">로그인</p>
            </Link>
          </div>
          <Outlet />
        </>
      ) : (
        <>
          <div
            className="flex justify-between items-center bg-green-300 p-[15px]
      font-bold text-[20px]"
          >
            <Link to={"/"}>
              <p className=" ml-[20px]">홈 </p>
            </Link>
            <Link to={"/profile"}>
              <p className="mr-[20px]">프로필</p>
            </Link>
            <Link to={"/testPage"}>
              <p className="mr-[20px]">테스트</p>
            </Link>
            <Link to={"/testResult"}>
              <p className="mr-[20px]">결과보기</p>
            </Link>
            <Link to={"/login"} onClick={LogoutHandle}>
              <button className="mr-[20px]">로그아웃</button>
            </Link>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default Headerbar;
