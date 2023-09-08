import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

export const MyInfo = () => {
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
    setPopup(false); // 팝업 닫기
  };

  const [popup, setPopup] = useState(false);
  // 닫기 버튼 클릭 핸들러
  const handleCloseClick = () => {
    setPopup(false);
  };
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
    <MyPageContainer>
      <h2>My Info</h2>
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
              <div>
                <CloseButton onClick={handleCloseClick}>X</CloseButton>
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
              </div>
            )}
          </PopupContainer>
        </UserInfoItem>
      </UserInfo>
      <div>
        {isEditMode ? (
          <SaveButton onClick={handleSaveClick}>저장</SaveButton>
        ) : (
          <EditButton onClick={() => setIsEditMode(true)}>수정</EditButton>
        )}
      </div>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  text-align: center;
  padding: 5rem 5rem;
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
  > div:last-of-type {
    border: none;
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
  background-color: #B9E0FF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const SaveButton = styled.button`
  margin-top: 1rem;
  background-color: #8D72E1;
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

const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  z-index: 1000;
`;
