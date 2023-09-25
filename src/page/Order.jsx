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
            <div>
              <thead>
                <tr>
                  <th>주문번호</th>
                  <th>상품</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>결제가</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <span></span>
                  </td>
                  <td>상품명1</td>
                  <td>1</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <span></span>
                  </td>
                  <td>상품명1</td>
                  <td>1</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <span></span>
                  </td>
                  <td>상품명1</td>
                  <td>1</td>
                  <td>10,000</td>
                </tr>
              </tbody>
            </div>
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
                placeholder="Your Name"
              />
              <div>
                <label>휴대폰 번호</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              <div>
                <label>주소</label>
                <div>
                  <input type="text" placeholder="Your Address" />
                  <input type="text" placeholder="Your Address" />
                  <input type="text" placeholder="Your Address" />
                  <button>주소 검색</button>
                </div>
              </div>
            </div>
          </div>
        </StyledInner>
        <StyledFormMarry>
          <h3>예식정보</h3>
          <div>
            <div>
              <label>신랑명</label>
              <input type="text" />
              <label>신부명</label>
              <input type="text" />
            </div>
            <div>
              <label>예식명</label>
              <input type="text" />
            </div>
            <div>
              <label>예식 장소</label>
              <input type="text" />
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  h2 {
    padding: 2rem;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  h3 {
    width: 10rem;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    margin-right: 2rem;
  }
`;

const StyledInner = styled.div`
  margin: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  div {
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  div > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0.5;
  }
  div > div > label {
    text-align: right;
    width: 3rem;
    padding: 1rem;
  }
  div > div:nth-of-type(3) > button {
  }
  div > div > input {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
  div > div > button {
    margin: 0.5rem 1rem;
    align-items: flex-start;
  }
`;

const StyledTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem;
  margin: 2rem;
  table {
    width: 50rem;
  }
  table > div {
    width: 100%;
    margin: 0 auto;
  }
  table > div th,
  table > div td {
    padding: 1rem 2rem;
    border-bottom: 1px solid gray;
    text-align: center;
    vertical-align: middle;
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
    width: 50rem;
    display: flex;
  flex-direction: column;
  align-items: flex-start;
  }
  div > label {
    text-align: right;
    width:3rem;
    padding: 1rem;
  }
  div > input {
  padding: 0.5rem;
  margin: 0.5rem;
  }
  div > div {
  display: flex;
  flex-direction: row;
  div > button {
  margin: 0.5rem 1rem;
  align-items: flex-start;
  }
`;

export default Order;
