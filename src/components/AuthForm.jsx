import { useState } from "react";
const AuthForm = ({ mode, onSubmit, handleSignup, handleLogin }) => {
  // const { signin } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "signup") {
        handleSignup(formData);
      } else {
        handleLogin(formData);
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed");
    }
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
            name="id"
            type="text"
            value={formData.id}
            onChange={handleChange}
            required
          ></input>
          <input
            className="border-4 border-blue-500"
            placeholder="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
          {mode === "signup" && (
            <input
              className="border-4 border-blue-500"
              placeholder="닉네임"
              name="nickname"
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
