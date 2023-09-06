import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import Button from "components/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  });

  const [popup, setPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

    console.log(data.zonecode); // 우편번호'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 회원가입 API 호출
      const response = await axios.post("/api/signup", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <SignUpContainer>
        <h2>회원가입</h2>
        <SignUpForm onSubmit={handleSubmit}>
          <div>
            <InputLabel>이름</InputLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <InputLabel htmlFor="username">아이디</InputLabel>
            <Input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <InputLabel htmlFor="confirmPassword">비밀번호 확인</InputLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="phoneNumber">휴대폰 번호</InputLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="address">주소</InputLabel>
            <Input
              type="text"
              name="address"
              value={formData.address}
              readOnly
              onClick={() => setPopup(true)}
              required
            />
            <PopupContainer>
              {popup && (
                <DaumPostcode
                  onComplete={handleComplete}
                  autoClose={true}
                  animation={true}
                  style={{
                    position: "absolute",
                    right: "-27rem",
                    bottom: "20rem",
                    width: "400px",
                    height: "100%",
                    border: "1px solid rgba(100,100,100,0.5)",
                    paddingBottom: "0",
                    zIndex: 100,
                  }}
                />
              )}
            </PopupContainer>
          </div>
          <div>
            <InputLabel>생년월일</InputLabel>
            <Input
              type="text"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" title={"가입완료"} href={"/"} />
        </SignUpForm>
      </SignUpContainer>
      <Footer />
    </div>
  );
};

const SignUpContainer = styled.div`
  text-align: center;
  padding: 10rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    width: 30rem;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin: 1.5rem 0 0;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(120, 120, 120, 0.5);
  }
  div:last-of-type {
    border: none;
    margin-bottom: 2rem;
  }
`;

const InputLabel = styled.label`
  text-align: left
  padding: 0.5rem 5rem;
`;

const Input = styled.input`
  width: 20rem;
  padding: 0.5rem 0.5rem;
  margin-top: 5px;
  box-sizing: border-box;
`;

const PopupContainer = styled.div`
  position: fixed;
  width: 400px;
  height: 500px;
`;

export default SignUp;
