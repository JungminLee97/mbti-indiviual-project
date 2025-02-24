import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center text-base m-6 gap-12   ">
        <h1 className="text-4xl font-bold">무료 성격 테스트</h1>
        <h3 className="font-bold">
          자신의 성격 유형을 확인할수 있도록 솔직하게 답변해 주세요.
        </h3>
        <div className="flex gap-[50px]">
          <div className="w-[180px] h-[180px] text-wrap text-[13px] text-center content-center font-bold shadow-2xl shadow-blue-400">
            <h3>성격 유형 검사</h3>
            <br />
            <p>
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </p>
          </div>
          <div className="w-[180px] h-[180px] text-wrap text-[13px] text-center content-center font-bold shadow-2xl shadow-blue-400">
            <h3>성격 유형 이해</h3>
            <br />
            <p>
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </p>
          </div>
          <div className="w-[180px] h-[180px] text-wrap text-[13px] text-center content-center font-bold shadow-2xl shadow-blue-400">
            <h3>팀 평가</h3>
            <br />
            <p>
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              배워보세요.
            </p>
          </div>
        </div>
        <Link to="/login">
          <button
            className="bg-red-500 border-4 border-white text-white p-[10px] rounded-[<20px>]
 "
            onClick={() => {
              if (!isAuthenticated) {
                alert("후헤헤 로그인해야지~");
                navigate("/login");
              } else {
                navigate("/profile");
              }
            }}
          >
            내 성격 알아보러 가기
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
