//import React from 'react'
import { styled } from "styled-components";

export const Input = () => {
  return (
    <StyledForm>
      <h2>회원가입</h2>
      <StyledInner>
        <div>
          <label>이름</label>
          <input
            type="text"
            minLength="2"
            maxLength="5"
            placeholder="Your Name"
          />
        </div>
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
          <p>영문 숫자 포함 8~15자</p>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            minLength="8"
            maxLength="15"
            placeholder="Your Password"
          />
        </div>
        <div>
          <label>휴대폰 번호</label>
          <input type="tel" placeholder="Your Phone Number" />
        </div>
        <div>
          <label>주소</label>
          <div>
            <input type="text" placeholder="Your Address" />
            <br />
            <input type="text" placeholder="Your Address" />
            <br />
            <input type="text" placeholder="Your Address" />
          </div>
          <button>우편번호 검색</button>
        </div>
        <div>
          <label>생년월일</label>
          <input type="text" placeholder="Your Address" />
        </div>
        <div>
          <label>성별</label>
          <input type="radio" name="gender" checked />
          <label>남</label>
          <input type="radio" name="gender" />
          <label>여</label>
        </div>
      </StyledInner>
      <StyledSubmit>
        <button type="submit">회원가입</button>
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
  div > div {
    display: flex;
    flex-direction: column;
  }
  div:nth-of-type(6) {
    align-items: flex-start;
  }
  div > p {
    font-size: 0.5rem;
    margin: 1rem;
    color: gray;
  }
  div > button {
    margin: 1rem;
  }
`;

const StyledSubmit = styled.div`

  margin: 2rem;
  button {
    padding: 1rem;
    font-size: 1rem;

  }
`;
