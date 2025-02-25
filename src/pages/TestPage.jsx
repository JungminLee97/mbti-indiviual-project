import { useContext, useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { createTestResult } from "../api/testResults";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TestPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const [result, setResult] = useState(null);

  const { mutate } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      console.log("데이터캐싱완료"),
        queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.error("error", error);
    },
  });

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    /* Test 결과는 mbtiResult 라는 변수에 저장이 됩니다. 이 데이터를 어떻게 API 를 이용해 처리 할 지 고민해주세요. */
    setResult(mbtiResult);

    if (user) {
      mutate({
        userId: user.id,
        nickname: user.nickname,
        result: mbtiResult,
        visibility: true,
        date: new Date().toLocaleString("ko-KR"),
      });
    }
  };

  const handleNavigateToResults = () => {
    navigate("/testResult");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
