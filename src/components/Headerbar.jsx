import { Link, Outlet } from "react-router";

const Headerbar = () => {
  return (
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
  );
};

export default Headerbar;
