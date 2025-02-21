import { Link, useNavigate } from "react-router";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  // 완성된 로직들이 아니에요! 참고만 하세요!
  const handleSignup = async (formData) => {
    try {
      const getdata = await register(formData);
      localStorage.setItem("token", getdata.token);
      navigate("/");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className="bg-blue-300 w-auto min-w-[350px] h-auto min-h-[350px]
      mt-[40px] rounded-[10px] shadow-2xl shadow-black border-4  border-white"
        >
          <h1 className="m-[15px] text-[20px] font-bold">{"회원가입"}</h1>
          <AuthForm mode="signup" />
          <h4 className="text-center mt-[5px] mb-[5px]">
            {"이미 계정을 만드셨나요?!"}
            <Link className="text-red-600 font-bold ml-[8px]" to={"/login"}>
              {"로그인"}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Signup;
