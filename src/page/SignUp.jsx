import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { styled } from "styled-components";
import axios from "axios";
import Button from "../components/Button";

const SignUp = () => {

  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    try{
      const response = await axios.get(
        ""
      );
      console.log(response.data);
    }catch (error) {
      console.log(error);
    }
  };
  
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [chkPwd, setChkPwd] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

  const [popup, setPopup] = useState(false);

  const signup = () => {
    if (
      id === "" ||
      pwd === "" ||
      chkPwd === "" ||
      name === "" ||
      //address === "" ||
      phoneNumber === "" ||
      birthday === ""
    ) {
      window.alert("내용을 모두 입력해주세요!");
      return;
    }
    if (pwd !== chkPwd) {
      window.alert("비밀번호와 재입력된 비빌번호가 다릅니다.");
      return;
    }
  };

  return (
    <div>
      <Header />
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
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>아이디</label>
            <input
              type="text"
              minLength="5"
              maxLength="15"
              placeholder="Your ID"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              minLength="8"
              maxLength="15"
              placeholder="Your Password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
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
              onChange={(e) => {
                setChkPwd(e.target.value);
              }}
            />
          </div>
          <div>
            <label>휴대폰 번호</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <label>주소</label>
            <div>
              <input type="text" placeholder="Your Address" />
              <input type="text" placeholder="Your Address" />
              <input type="text" placeholder="Your Address" />
            </div>
            <button
              onClick={() => {
                setPopup(!popup);
              }}
            >
            주소 검색
            </button>
          </div>
          <div>
            <label>생년월일</label>
            <input
              type="text"
              placeholder="Your Birthday"
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
            />
          </div>
        </StyledInner>
        <StyledSubmit>
          <Button
          title={"회원가입"}
          onClick={() => {
            signup();
          }} />
        </StyledSubmit>
      </StyledForm>
      <Footer />
    </div>
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
    div:nth-of-type(3) {
      margin: 0;
      padding: 0;
    }
  }
  div:nth-of-type(6) {
    align-items: flex-start;
    input {
      margin: 0.2rem 0;
    }
  }
  div > p {
    font-size: 0.5rem;
    margin: 1rem;
    color: gray;
  }
  div > button {
    margin: 0.5rem 1rem;
  }
`;

const StyledSubmit = styled.div`
  margin: 2rem;
  button {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export default SignUp;
