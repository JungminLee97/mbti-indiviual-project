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
      <div className="flex justify-center items-center">
        <div
          className="bg-blue-300 w-auto min-w-[350px] h-auto min-h-[350px]
        mt-[40px] rounded-[10px] shadow-2xl shadow-black border-4  border-white"
        >
          <h1 className="m-[15px] text-[20px] font-bold">
            {isSignup ? "회원가입" : "로그인"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div
              className="flex flex-col w-[280px] h-[280px]
            justify-around m-auto border-4 border-white-300 shadow-xl shadow-gray-400 "
            >
              <input
                className="border-4 border-blue-500"
                placeholder="아이디"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              ></input>
              <input
                className="border-4 border-blue-500"
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {isSignup && (
                <input
                  className="border-4 border-blue-500"
                  placeholder="닉네임"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              )}
              <button
                className="bg-red-600 border-4 border-blue-500 text-white"
                type="submit"
              >
                {isSignup ? "회원가입" : "로그인"}
              </button>
            </div>
          </form>
          <h4 className="text-center mt-[5px] mb-[5px]">
            {isSignup ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}
            <Link
              className="text-red-600 font-bold ml-[8px]"
              to={isSignup ? "/login" : "/signup"}
            >
              {isSignup ? "로그인" : "회원가입"}
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
