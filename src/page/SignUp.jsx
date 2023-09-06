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
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=.]).{8,15}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    const errors = { ...formErrors };

    if (name === "name") {
      if (!value) {
        errors[name] = "이름을 입력하세요.";
      } else {
        delete errors[name];
      }
    }
    if (name === "id") {
      // 아이디 유효성 검사
      if (!value) {
        errors[name] = "아이디를 입력하세요.";
      } else if (!/^[a-z0-9]+$/.test(value)) {
        errors[name] = "아이디는 소문자와 숫자로만 허용됩니다.";
      } else {
        delete errors[name];
      }
    }
    if (name === "password") {
      // 비밀번호 유효성 검사
      if (!passwordRegex.test(value)) {
        errors[name] =
          "비밀번호는 최소 8자 이상 15자미만, 대소문자, 숫자, 특수 문자를 포함해야 합니다.";
      } else {
        delete errors[name];
      }
    }
    if (name === "confirmPassword") {
      // 비밀번호 확인 유효성 검사
      if (value !== formData.password) {
        errors[name] = "비밀번호와 일치하지 않습니다.";
      } else {
        delete errors[name];
      }
    }
    if (name === "phoneNumber") {
      // 휴대폰 번호 입력 시 '-' 추가
      updatedValue = updatedValue
        .replace(/[^0-9]/g, "") // 숫자 이외의 문자 제거
        .slice(0, 11) // 8글자까지만 유효
        .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"); // 번호 형식 변경
    } else if (name === "birthday") {
      // 생년월일 숫자로만 받고 '-' 추가
      updatedValue = updatedValue
        .replace(/[^0-9]/g, "") // 숫자 이외의 문자 제거
        .slice(0, 8) // 8글자까지만 유효
        .replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"); // 년월일 형식 변경
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
    setFormErrors(errors);
  };

  const [formErrors, setFormErrors] = useState({});

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
    setFormData({
      ...formData,
      address: fullAddress,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = { ...formErrors };

    if (Object.keys(errors).length > 0) {
      return;
    }

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
            {formErrors.name && <Error>{formErrors.name}</Error>}
          </div>
          <div>
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
            {formErrors.id && <Error>{formErrors.id}</Error>}
          </div>
          <div>
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
            {formErrors.password && <Error>{formErrors.password}</Error>}
          </div>
          <div>
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
            {formErrors.confirmPassword && (
              <Error>{formErrors.confirmPassword}</Error>
            )}
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <Button title={"가입완료"} href={"/"} />
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
  > div {
    display: flex;
    flex-direction: column;
    justfy-content: space-around;
    margin: 1.5rem 0 0;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(150, 150, 150, 0.3);
  }
  > div > div {
    display: flex;
    flex-direction: row;
    width: 30rem;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
  >div:last-of-type {
    border: none;
    margin-bottom: 4rem;
  }
`;

const InputLabel = styled.label`
  text-align: left;
`;

const Input = styled.input`
  width: 20rem;
  padding: 0.5rem 0.5rem;
  margin-top: 5px;
  box-sizing: border-box;
`;

const PopupContainer = styled.div`
  position: fixed;
  right: 0rem;
  bottom: 5rem;
  width: 400px;
  height: 500px;
`;

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: right;
`;

export default SignUp;
