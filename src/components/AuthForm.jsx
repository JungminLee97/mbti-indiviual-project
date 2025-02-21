import { useState } from "react";
const AuthForm = ({ mode, onSubmit }) => {
  // 무엇을 formData 에 넣어야 할까요?
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col w-[280px] h-[280px]
            justify-around m-auto border-4 border-white-300 shadow-xl shadow-gray-400 "
        >
          <input
            className="border-4 border-blue-500"
            placeholder="아이디"
            type="text"
            value={formData.id}
            onChange={handleChange}
            required
          ></input>
          <input
            className="border-4 border-blue-500"
            placeholder="비밀번호"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
          {mode === "signup" && (
            <input
              className="border-4 border-blue-500"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          )}
          <button
            className="bg-red-600 border-4 border-blue-500 text-white"
            type="submit"
          >
            {mode === "login" ? "로그인" : "회원가입"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
