import { useContext } from "react";
import {
  getTestResults,
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import AuthContext from "../context/AuthContext";

const TestResult = () => {
  const { user } = useContext(AuthContext); // user 객체를 가져옴
  const { data, isPending, isError } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const queryClient = useQueryClient();

  // 데이터가 갱신될 때마다 테스트 결과를 다시 로드하도록 요청
  queryClient.invalidateQueries(["testResults"]);

  // 삭제 처리 함수
  const handleDelete = async (id) => {
    try {
      await deleteTestResult(id);
      queryClient.invalidateQueries(["testResults"]);
    } catch (error) {
      console.error("삭제 중 오류가 발생했습니다.", error);
    }
  };

  // 수정 처리 함수 (visibility 수정)
  const handleVisibilityToggle = async (id, currentVisibility) => {
    try {
      await updateTestResultVisibility(id, !currentVisibility, user.id); // 수정: user.id를 전달
      queryClient.invalidateQueries(["testResults"]);
    } catch (error) {
      console.error("수정 중 오류가 발생했습니다.", error);
    }
  };

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  // 수정: user가 null인 경우를 처리합니다.
  if (!user) {
    return <div>로그인 정보가 없습니다.</div>;
  }

  return (
    <>
      {data.length === 0 ? (
        <p>저장된 테스트 결과가 없습니다.</p>
      ) : (
        data.map((da) => (
          <div key={da.id} className="border p-4 rounded-lg my-2">
            <p>사용자: {da.nickname}</p>
            <p>MBTI 결과: {da.result}</p>
            <p>날짜: {da.date}</p>
            {da.userId === user.id && ( // 수정: user.id가 일치할 때만 버튼 보이도록
              <>
                <button
                  onClick={() => handleDelete(da.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  삭제
                </button>
                <button
                  onClick={() => handleVisibilityToggle(da.id, da.visibility)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {da.visibility ? "숨기기" : "공개"}
                </button>
              </>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default TestResult;
