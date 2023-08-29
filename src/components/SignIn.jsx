//import React from 'react'
import { styled } from "styled-components";

export const SignIn = () => {
  return (
    <StyledForm>
      <h2>로그인</h2>
      <StyledInner>
        <div>
          <label>아이디</label>
          <input
            type="text"
            minLength="5"
            maxLength="15"
            placeholder="Your ID"
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            minLength="8"
            maxLength="15"
            placeholder="Your Password"
          />
        </div>
        <div>
          <p>
          <a href="#">회원가입</a>
          </p>
        </div>
      </StyledInner>
      <StyledSubmit>
        <button>로그인</button>
      </StyledSubmit>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
  margin: 2rem;
  h2 {
    padding: 2rem;
    font-size: 2rem;
    font-weight: bold;
  }
`;
const StyledInner = styled.div`
  padding: 1.5rem;
  margin: 2rem;
  border: 1px solid gray;
  border-radius: 20px;
  div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  div > label {
    width: 8rem;
    padding: 1rem;
  }
  div > input {
    padding: 0.5rem;
  }
  div:nth-of-type(3){
    align-items: flex-start;
    justify-content: right;
    a{
      color: gray;
      text-decoration: none;
      font-size: 0.8rem;
    }
  }
`;
const StyledSubmit = styled.div`
  margin: 2rem;
  button {
    padding: 1rem;
    font-size: 1rem;
  }
`;
