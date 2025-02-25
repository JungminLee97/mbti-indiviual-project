import { useState } from "react";
import { createTestResult, getTestResults } from "../api/testResults";
const TestResult = () => {
  // localStorage.getItem("mbtiResult", mbtiResult);
  const [fetch, setFetch] = useState(null);

  return (
    <>
      <div>TestResult </div>
    </>
  );
};

export default TestResult;
