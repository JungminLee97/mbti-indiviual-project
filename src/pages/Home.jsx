import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
          margin: "25px",
          gap: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
          무료 성격 테스트
        </h1>
        <h3
          style={{
            fontWeight: "bold",
          }}
        >
          자신의 성격 유형을 확인할수 있도록 솔직하게 답변해 주세요.
        </h3>
        <div
          style={{
            display: "flex",
            gap: "50px",
          }}
        >
          <div
            style={{
              width: "180px",
              height: "180px",
              textWrap: "wrap",
              fontSize: "13px",
              fontWeight: "bold",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <h3>성격 유형 검사</h3>
            <br />
            <p>
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </p>
          </div>
          <div
            style={{
              width: "180px",
              height: "180px",
              textWrap: "wrap",
              fontSize: "13px",
              fontWeight: "bold",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <h3>성격 유형 이해</h3>
            <br />
            <p>
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </p>
          </div>
          <div
            style={{
              width: "180px",
              height: "180px",
              textWrap: "wrap",
              fontSize: "13px",
              fontWeight: "bold",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
              textAlign: "center",
              alignContent: "center",
            }}
          >
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
            onClick={() => {
              <Link to="/login" />;
            }}
            style={{
              backgroundColor: "red",
              border: "3px solid white",
              color: "white",
              padding: "10px",
              borderRadius: "20px",
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
