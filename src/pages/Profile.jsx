const Profile = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "lightblue",
            width: "auto",
            minWidth: "350px",
            height: "auto",
            minHeight: "250px",
            marginTop: "40px",
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              margin: "15px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            프로필수정
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              height: "150px",
              justifyContent: "space-evenly",
              margin: "auto",
              border: "3px solid lightblue",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              닉네임
            </p>
            <input
              style={{ border: "3px solid blue" }}
              placeholder="닉네임을 입력하세요"
            ></input>
            <button
              style={{
                backgroundColor: "red",
                border: "3px solid white",
              }}
            >
              프로필 업데이트
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
