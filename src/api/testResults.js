import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id, userId) => {
  try {
    // id와 userId를 기반으로 삭제 요청
    const response = await axios.delete(`${API_URL}/${id}`, {
      data: { userId }  // 서버로 userId 전달
    });

    return response.data;
  } catch (error) {
    console.error("삭제 중 오류가 발생했습니다:", error);
    throw new Error("삭제 중 오류가 발생했습니다.");
  }
};

export const updateTestResultVisibility = async (id, visibility, userId) => {
  const response = await axios.get(`${API_URL}/${id}`);
  const testResult = response.data;

  // 본인만 공개 여부 변경 가능
  if (testResult.userId === userId) {
    const updatedTestResult = await axios.patch(`${API_URL}/${id}`, {
      visibility,
    });
    return updatedTestResult.data;
  } else {
    throw new Error("본인의 테스트 결과만 공개 여부를 변경할 수 있습니다.");
  }
};
