import { Link, Outlet } from "react-router";

const Headerbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgreen",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <Link to={"/"}>
          <p style={{ margin: "0 20px " }}>홈 </p>
        </Link>
        <Link to={"/login"}>
          <p style={{ margin: "0 20px " }}>로그인</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Headerbar;
