import { Link } from "react-router";

const Signup = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "lightblue",
            width: "auto",
            minWidth: "350px",
            height: "auto",
            minHeight: "350px",
            marginTop: "40px",
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              margin: "15px",
            }}
          >
            로그인
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "280px",
              height: "280px",
              justifyContent: "space-around",
              margin: "auto",
              border: "3px solid lightblue",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            }}
          >
            <input
              style={{ border: "3px solid blue" }}
              placeholder="아이디"
            ></input>
            <input
              style={{ border: "3px solid blue" }}
              placeholder="비밀번호"
            ></input>
            <input
              style={{ border: "3px solid blue" }}
              placeholder="닉네임"
            ></input>

            <button
              style={{
                backgroundColor: "red",
                border: "3px solid white",
              }}
            >
              회원가입
            </button>
          </div>
          <h4 style={{ textAlign: "center", margin: "10px" }}>
            계정이 없으신가요?{" "}
            <Link style={{ color: "red" }} to={"/login"}>
              로그인
            </Link>{" "}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Signup;
