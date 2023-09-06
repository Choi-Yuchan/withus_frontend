import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";


const MyPage = () => {
  // 사용자 정보 상태 관리
  const [userInfo, setUserInfo] = useState({
    name: "Your Name",
    id: "Your Id",
    phoneNumber: "123-456-7890",
    address: "Address",
  });

  // 수정 모드 상태 관리
  const [isEditMode, setIsEditMode] = useState(false);

  // 입력 필드 값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // 저장 버튼 클릭 핸들러
  const handleSaveClick = () => {
    setIsEditMode(false); // 수정 모드 종료
  };

  const [popup, setPopup] = useState(false);
  const handleComplete = (data) => {
    let fullAddress = data.address;

    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data.zonecode); // 우편번호
    setUserInfo({
      ...userInfo,
      address: fullAddress,
    });
  };
  return (
    <div>
      <Header />
      <MyPageContainer>
        <h2>My Page</h2>
        <UserInfo>
          <UserInfoItem>
            <label>이름:</label>
            {isEditMode ? (
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userInfo.name}</span>
            )}
          </UserInfoItem>
          <UserInfoItem>
            <label>아이디:</label>
            <span>{userInfo.id}</span>
          </UserInfoItem>
          <UserInfoItem>
            <label>전화번호:</label>
            {isEditMode ? (
              <input
                type="text"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userInfo.phoneNumber}</span>
            )}
          </UserInfoItem>
          <UserInfoItem>
            <label>주소</label>
            {isEditMode ? (
              <input
                type="text"
                name="address"
                value={userInfo.address}
                readOnly
                onClick={() => setPopup(true)}
                onChange={handleInputChange}
                required
              />
            ) : (
              <span>{userInfo.address}</span>
            )}
            <PopupContainer>
                {popup && (
                  <DaumPostcode
                    onComplete={handleComplete}
                    autoClose={true}
                    animation={true}
                    style={{
                      position: "absolute",
                      width: "400px",
                      height: "100%",
                      border: "1px solid rgba(100,100,100,0.5)",
                      paddingBottom: "0",
                      zIndex: 100,
                    }}
                  />
                )}
              </PopupContainer>
          </UserInfoItem>
        </UserInfo>
        <div>
          <EditButton onClick={() => setIsEditMode(true)}>수정</EditButton>
          {isEditMode && (
            <SaveButton onClick={handleSaveClick}>저장</SaveButton>
          )}
        </div>
      </MyPageContainer>
      <Footer />
    </div>
  );
};

const MyPageContainer = styled.div`
  text-align: center;
  padding: 10rem 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  > h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;

const UserInfo = styled.div`
  margin-top: 1rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  > div {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(150, 150, 150, 0.5);
    margin-bottom: 1.5rem;
  }
`;

const UserInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }
  input {
    padding: 0.2rem;
  }
`;

const EditButton = styled.button`
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const SaveButton = styled.button`
  margin-top: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
`;

const PopupContainer = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  width: 400px;
  height: 500px;
`;

export default MyPage;
