import React from "react";
import { useForm } from "react-hook-form";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ userId, password }) => {
    if (userId === "" || password === "") {
      alert("아이디 혹은 비밀번호를 입력해주세요!");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          username: userId,
          password,
        }
      );

      const { message, data } = response.data;
      if (message == "SUCCESS") {
        navigate("/");
        localStorage.setItem("role", data[0]?.authority);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Header />
      <LogInContainer className="main-font-color">
        <LogoImageBox>
          <a href="/">
            <img src="/images/withus_logo.png" alt="withus_logo" />
            <h2>WithUs</h2>
          </a>
        </LogoImageBox>
        <LogInForm onSubmit={handleSubmit(onSubmit)}>
          <FormInner>
            <FormGroup>
              <label>아이디</label>
              <input
                {...register("userId", {
                  minLength: 5,
                  maxLength: 15,
                  required: true,
                })}
                type="text"
                placeholder="Your ID"
              />
              {errors.userId && (
                <ErrorText>올바른 아이디를 입력해주세요.</ErrorText>
              )}
            </FormGroup>
            <FormGroup>
              <label>비밀번호</label>
              <input
                {...register("password", {
                  minLength: 8,
                  maxLength: 15,
                  required: true,
                })}
                type="password"
                placeholder="Your Password"
              />
              {errors.password && (
                <ErrorText>올바른 비밀번호를 입력해주세요.</ErrorText>
              )}
            </FormGroup>
            <SignUpBox>
              <p>
                <a href="/signup">회원가입</a>
              </p>
            </SignUpBox>
          </FormInner>
          <ButtonBox>
            <SubmitButton type="submit">로그인</SubmitButton>
          </ButtonBox>
        </LogInForm>
      </LogInContainer>
      <Footer />
    </main>
  );
};

const LogoImageBox = styled.div`
  width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-family: cursive;
    text-decoration: none;
    color: #666;
  }
`;
const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 152px);
  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #777;
  }
`;

const LogInForm = styled.form`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 6px;
  }

  input {
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const SignUpBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  a {
    color: #777;
    text-decoration: underline;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #8d9eff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6c4ab6;
  }
`;

export default LogIn;
