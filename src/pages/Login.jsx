import { Link, useNavigate } from "react-router";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const { signin } = useContext(AuthContext);
  const handleLogin = async (formData) => {
    try {
      const getData = await login(formData);

      if (getData.success) {
        signin(getData.accessToken);

        alert("로그인 성공!");
        navigate("/profile");
      } else {
        alert("로그인 실패!!");
      }
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className="bg-blue-300 w-auto min-w-[350px] h-auto min-h-[350px]
        mt-[40px] rounded-[10px] shadow-2xl shadow-black border-4  border-white"
        >
          <h1 className="m-[15px] text-[20px] font-bold">{"로그인"}</h1>
          <AuthForm mode="login" handleLogin={handleLogin} />
          <h4 className="text-center mt-[5px] mb-[5px]">
            {"계정이 없으신가요?"}
            <Link className="text-red-600 font-bold ml-[8px]" to={"/signup"}>
              {"회원가입"}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
