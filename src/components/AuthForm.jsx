import { Link } from "react-router";
import { useState } from "react";
const AuthForm = ({ mode }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const isSignup = mode === "signup";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("회원가입:", { id, password, nickname });
    } else {
      console.log("로그인:", { id, password });
    }
  };

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
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {isSignup ? "회원가입" : "로그인"}
          </h1>
          <form onSubmit={handleSubmit}>
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
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              ></input>
              <input
                style={{ border: "3px solid blue" }}
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {isSignup && (
                <input
                  style={{ border: "2px solid blue", padding: "8px" }}
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              )}
              <button
                type="submit"
                style={{
                  backgroundColor: "red",
                  border: "3px solid white",
                }}
              >
                {isSignup ? "회원가입" : "로그인"}
              </button>
            </div>
          </form>
          <h4 style={{ textAlign: "center", margin: "10px" }}>
            {isSignup ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}
            <Link style={{ color: "red" }} to={isSignup ? "/login" : "/signup"}>
              {isSignup ? "로그인" : "회원가입"}
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
