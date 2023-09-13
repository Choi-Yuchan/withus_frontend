import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import axios from "axios";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import Spinner from "components/Spinner";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      userName: "",
      userId: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      addr1: "",
      addr2: "",
      addr3: "",
      birth: "",
      gender: "F",
    },
  });

  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const handleComplete = (data) => {
    setValue("addr1", data.zonecode);
    setValue("addr2", data.address);
    setPopup(false);
  };

  const handleCloseClick = () => {
    setPopup(false);
  };

  const onSubmit = async (data) => {
    const {
      userName,
      userId,
      password,
      phoneNumber,
      addr1,
      addr2,
      addr3,
      birth,
      gender,
    } = data;
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          userName,
          userId,
          password,
          phoneNumber,
          addr1,
          addr2,
          addr3,
          birth,
          gender,
        }
      );
      console.log(response.data);
      if (response.data == "SUCCESS") {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      {isSubmitting && <Spinner />}
      <SignUpContainer>
        <div>
          <h2>회원가입</h2>
        </div>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <InputLabel>이름</InputLabel>
              <Input
                placeholder="이름"
                {...register("userName", {
                  required: "이름을 입력해주세요.",
                })}
              />
            </div>
            <ErrorMessage errors={errors} name="userName" />
          </div>
          <div>
            <div>
              <InputLabel htmlFor="userId">아이디</InputLabel>
              <Input
                placeholder="2~10자 영문/숫자"
                {...register("userId", {
                  required: "아이디를 입력하세요.",
                  pattern: {
                    value: /^[a-z0-9]+$/,
                    message: "아이디는 소문자와 숫자로만 허용됩니다.",
                  },
                  minLength: {
                    value: 2,
                    message: "아이디는 최소 2글자 이상이어야 합니다.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="userId"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              />
            </div>
          </div>
          <div>
            <div>
              <InputLabel htmlFor="password">비밀번호</InputLabel>
              <Input
                type="password"
                placeholder="8~15자 영문/숫자/특수문자"
                {...register("password", {
                  required: "비밀번호를 입력하세요.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=.]).{8,15}$/,
                    message:
                      "비밀번호는 최소 8자 이상 15자미만, 대소문자, 숫자, 특수 문자를 포함해야 합니다.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                }
              />
            </div>
          </div>
          <div>
            <div>
              <InputLabel htmlFor="confirmPassword">비밀번호 확인</InputLabel>
              <Input
                type="password"
                placeholder="비밀번호 확인"
                {...register("confirmPassword", {
                  required: "비밀번호를 입력하세요",
                  validate: {
                    checkPassword: (value) => {
                      if (getValues("password") !== value) {
                        return "비밀번호가 일치하지 않습니다.";
                      }
                    },
                  },
                })}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              }
            />
          </div>
          <div>
            <div>
              <InputLabel htmlFor="phoneNumber">휴대폰 번호</InputLabel>
              <Input
                placeholder="하이픈(-) 없이 입력"
                {...register("phoneNumber", {
                  required: true,
                })}
              />
            </div>
          </div>
          <AddressBox>
            <InputLabel htmlFor="address">주소</InputLabel>
            <div className="address-container">
              <Input
                onClick={() => setPopup(true)}
                placeholder="우편번호"
                {...register("addr1", {
                  required: true,
                })}
              />
              <Input
                placeholder="주소"
                {...register("addr2", {
                  required: true,
                })}
              />
              <Input
                placeholder="상세주소"
                {...register("addr3", {
                  required: true,
                })}
              />

              {popup && (
                <PopupContainer>
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
                </PopupContainer>
              )}
            </div>
          </AddressBox>
          <div>
            <div>
              <InputLabel>생년월일</InputLabel>
              <Input
                placeholder="생년월일"
                {...register("birth", {
                  required: "생년월일을 입력해주세요",
                })}
              />
            </div>
          </div>
          <div>
            <div>
              <InputLabel>성별</InputLabel>
              <RadioBox>
                <p>남성</p>
                <input type="radio" {...register("gender")} value="M" />
              </RadioBox>
              <RadioBox>
                <p>여성</p>
                <input type="radio" {...register("gender")} value="F" />
              </RadioBox>
            </div>
          </div>
          <Button
            title={"가입완료"}
            type="submit"
            onClick={() => reset()}
            disabled={isSubmitting ? true : false}
          />
        </SignUpForm>
      </SignUpContainer>
      <Footer />
    </div>
  );
};

const SignUpContainer = styled.div`
  text-align: center;
  padding: 10rem;
  background-image: url(/images/flower-3.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 3rem;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    justfy-content: space-around;
    align-items: center;
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
  > div:last-of-type {
    border: none;
    margin-bottom: 2rem;
  }
`;
const AddressBox = styled.div`
  width: 30em;
  .address-container {
    flex-direction: column;
    align-items: flex-end;
    width: 100$;
  }
`;

const InputLabel = styled.label`
  text-align: left;
  width: 30%;
`;

const Input = styled.input`
  width: 20rem;
  padding: 0.5rem 0.5rem;
  margin-top: 5px;
  box-sizing: border-box;
`;

const RadioBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    margin: 0;
  }
  p {
    margin-right: 5px;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  width: 400px;
  height: 500px;
  z-index: 100;
  > div {
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 2rem;
    background: #cecece;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: -12px;
  background-color: #777;
  color: white;
  border: none;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  z-index: 1000;
`;

export default SignUp;
