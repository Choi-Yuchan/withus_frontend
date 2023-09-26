import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { useForm } from "react-hook-form";
import axios from "axios";

export const MyInfo = () => {
  const userNumber = localStorage.getItem("userNumber");
  console.log({userNumber});

  const fetchUserData = async (userNumber) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/userInfo/${userNumber}`
      );
      console.log(response);

      if (response.status === 200) {
        const userData = response.data;
        setUserInfo(userData);
      } else {
        alert("사용자 데이터를 가져오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("사용자 데이터 가져오기 오류:", error);
      alert("사용자 데이터를 가져오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchUserData(userNumber);
  }, [userNumber]);

  const [userInfo, setUserInfo] = useState({});

  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    setPopup(false);
  };

  const [popup, setPopup] = useState(false);
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
      fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
    }
    const updatedUserInfo = {
      ...userInfo,
      address: fullAddress,
    };

    setUserInfo(updatedUserInfo);
    console.log(fullAddress);
    console.log(data.zonecode);
    setUserInfo({
      ...userInfo,
      address: fullAddress,
    });
    setPopup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      // 회원탈퇴 API 호출
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/${userNumber}/deleteUser`
      );

      if (response.status === 200) {
        alert("회원탈퇴가 완료되었습니다.");
        handleLogout();
      } else {
        alert("회원탈퇴 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("회원탈퇴 오류:", error);
      alert("회원탈퇴 중 오류가 발생했습니다.");
    }
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
              value={userInfo.userName}
              onChange={handleInputChange}
              required
            />
          ) : (
            <span>{userInfo.userName}</span>
          )}
        </UserInfoItem>
        <UserInfoItem>
          <label>아이디:</label>
          <span>{userInfo.userId}</span>
        </UserInfoItem>
        <UserInfoItem>
          <label>전화번호:</label>
          {isEditMode ? (
            <input
              type="text"
              name="phoneNumber"
              value={userInfo.phoneNumber}
              onChange={handleInputChange}
              required
            />
          ) : (
            <span>{userInfo.phoneNumber}</span>
          )}
        </UserInfoItem>
        <UserInfoItem>
          <label>주소</label>
          {isEditMode ? (
            <AddressBox>
              <input
                type="text"
                name="address"
                value={userInfo.addr1}
                readOnly
                onClick={() => setPopup(true)}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                value={userInfo.addr2}
                readOnly
                required
              />
              <input type="text" name="address" value={userInfo.addr3} />
            </AddressBox>
          ) : (
            <AddressBox>
            <span>{userInfo.addr1}</span>
            <span>{userInfo.addr2}</span>
            <span>{userInfo.addr3}</span>
            </AddressBox>
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
      <div>
        <div>
          <WithdrawalForm onSubmit={handleSubmit(onSubmit)}>
            <WithdrawakButton type="submit">회원탈퇴</WithdrawakButton>
          </WithdrawalForm>
        </div>
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
  > div:nth-of-type(3) {
    width: 30rem;
    text-align: right;
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
  box-sizing: border-box;
  span {
    padding: 0.2rem;
  }
  label {
    font-weight: bold;
    margin-right: 1rem;
  }
  input {
    text-align: right;
  }
`;

const EditButton = styled.button`
  margin-top: 1rem;
  background-color: #b9e0ff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const SaveButton = styled.button`
  margin-top: 1rem;
  background-color: #8d72e1;
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

const WithdrawalForm = styled.form`
  margin: 4rem auto;
`;

const WithdrawakButton = styled.button`
  margin: 4rem auto;
  color: rgba(200, 200, 200, 0.5);
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

const AddressBox = styled.div`
  display:flex;
  flex-direction: column;
  text-align: right;
  >input{
    margin: 0.3rem 0;
  }
`