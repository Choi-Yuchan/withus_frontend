import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { MyInfo } from "components/MyInfo";
import OrderInquiry from "components/OrderInQuiry";
import React, { useState } from "react";
import styled from "styled-components";

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("주문조회");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <Header />
      <MyPageContainer>
        <h2>마이 페이지</h2>
        <MenuList>
          <MenuItem
            selected={selectedMenu === "주문조회"}
            onClick={() => handleMenuClick("주문조회")}
          >
            주문조회
          </MenuItem>
          <MenuItem
            selected={selectedMenu === "내정보 수정"}
            onClick={() => handleMenuClick("내정보 수정")}
          >
            내정보 수정
          </MenuItem>
        </MenuList>
        <Content>
          {selectedMenu === "주문조회" && (
            <div>
              {<OrderInquiry />}
            </div>
          )}
          {selectedMenu === "내정보 수정" && (
            <div>
              {<MyInfo />}
            </div>
          )}
        </Content>
      </MyPageContainer>
      <Footer />
    </div>
  );
};


const MyPageContainer = styled.div`
  text-align: center;
  padding: 10rem 5rem 0;
  >h2{
    font-size:2rem;
    font-weight:bold;
    margin-bottom:3rem;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const MenuItem = styled.li`
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  background: ${(props) => (props.selected ? "#8D9EFF" : "none")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
`;

const Content = styled.div`
  margin-top: 20px;
`;

export default MyPage;
