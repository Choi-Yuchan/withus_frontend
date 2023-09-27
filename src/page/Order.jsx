import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { styled } from "styled-components";
import Button from "components/Button";
import { Navigate } from "react-router-dom";

const Order = () => {
  const userNumber = localStorage.getItem("userNumber");

  if (!userNumber) return <Navigate to={"/login"} replace />;
  return (
    <div>
      <Header />
      <StyledForm>
        <h2>주문하기</h2>
        <StyledTable>
          <h3>주문정보</h3>
          <table>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>상품</th>
                <th>상품명</th>
                <th>수량</th>
                <th>결제가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <span></span>
                </td>
                <td>상품명1</td>
                <td>1</td>
                <td>10,000원</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <span></span>
                </td>
                <td>상품명2</td>
                <td>2</td>
                <td>20,000원</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <span></span>
                </td>
                <td>상품명3</td>
                <td>3</td>
                <td>30,000원</td>
              </tr>
            </tbody>
          </table>
        </StyledTable>
        <StyledInner>
          <h3>주문자정보</h3>
          <div>
            <div>
              <label>이름</label>
              <input
                type="text"
                minLength="2"
                maxLength="5"
                placeholder="이름"
              />
            </div>
            <div>
              <label>휴대폰 번호</label>
              <input type="tel" placeholder="휴대폰 번호" />
            </div>
            <div>
              <label>주소</label>
              <AddressBox>
                <input type="text" placeholder="우편번호 " />
                <input type="text" placeholder="주소" />
                <input type="text" placeholder="상세주소" />
              </AddressBox>
              <button>주소 검색</button>
            </div>
          </div>
        </StyledInner>
        <StyledFormMarry>
          <h3>예식정보</h3>
          <div>
            <div>
              <label>신랑명</label>
              <input type="text" placeholder="신랑명" />
            </div>
            <div>
              <label>신부명</label>
              <input type="text" placeholder="신부명" />
            </div>
            <div>
              <label>예식명</label>
              <input type="text" placeholder="예식명" />
            </div>
            <div>
              <label>예식 장소</label>
              <input type="text" placeholder="예식장소" />
            </div>
          </div>
        </StyledFormMarry>
        <Button title={"결제하기"} />
      </StyledForm>
      <Footer />
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 2rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 1rem;
    padding-top: 1rem;
    white-space: nowrap;
  }
  > div {
    width: 80%;
  }
  > div:not(last-of-type) {
    border-bottom: 1px solid #cecece;
  }
`;

const StyledInner = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  > div > div {
    display: flex;
    flex-direction: row;
  }

  input {
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  label {
    margin-top: 1rem;
    width: 150px;
    text-align: center;
  }

  button {
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    background-color: #8d9eff;
    height: 30px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem;
  margin: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    white-space: nowrap;
  }

  th,
  td {
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
    text-align: center;
    vertical-align: middle;
  }

  th {
    background-color: #8d9eff;
    color: #fff;
  }

  td {
    background-color: #fefefe;
  }

  span {
    display: block;
    width: 3rem;
    height: 3rem;
    background: gray;
  }
`;

const StyledFormMarry = styled.div`
  padding: 2rem;
  margin: 2rem;
  display: flex;
  flex-direction: row;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  label {
    width: 150px;
    text-align: center;
  }
  input {
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export default Order;
