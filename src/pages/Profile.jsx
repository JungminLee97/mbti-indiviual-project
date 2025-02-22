import React, { useState } from "react";
import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="bg-blue-300 w-auto min-w-[350px] h-auto min-h-[250px]
        mt-10 rounded-10 shadow-xl shadow-black-500"
        >
          <h1 className="text-[20px] font-bold m-[15px]">프로필수정</h1>
          <form onSubmit={handleSubmit}>
            <div
              className="flex flex-col w-[300px] h-[150px] justify-evenly
          m-auto border-4 border-blue-600 shadow-2xl shadow-blue-200    "
            >
              <p className="font-bold text-[14px]">닉네임</p>
              <input
                className="border-2 border-blue-500"
                placeholder="닉네임을 입력하세요"
                onChange={handleNicknameChange}
                value={nickname}
              ></input>
              <button className="bg-red-500 text-black font-bold border-2 border-white">
                프로필 업데이트
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
