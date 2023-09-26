import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const OrderInquiry = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  useEffect(() => {


    const userNumber = localStorage.getItem("userNumber");
    console.log(userNumber);
  
    if (!userNumber) return <Navigate to={"/login"} replace />;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/product/order/${userNumber}`
        );

        // 응답 데이터 확인
        console.log("주문 정보 응답 데이터:", response.data);

        // 가져온 주문 정보를 상태에 설정
        setOrders(response.data);
      } catch (error) {
        console.error("주문 정보를 불러오는 도중 오류 발생:", error);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, []);
    

  // 주문 상세 정보 토글 핸들러
  const handleOrderToggle = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  return (
    <OrderInquiryContainer>
      <div>
      <h2>주문 조회</h2>
      <OrderList>
        {orders.map((order) => (
          <OrderItem key={order.wid}>
            <OrderNumber onClick={() => handleOrderToggle(order.wid)}>
              주문번호: {order.cnumber}
            </OrderNumber>
            <OrderDetails expanded={expandedOrder === order.cnumber}>
              <OrderImg></OrderImg>
              <div>
                <div>상품: {order.wname}</div>
                <div>수량: {order.wcount}</div>
                <div>상세 정보: {order.cnumber}</div>
              </div>
            </OrderDetails>
          </OrderItem>
        ))}
      </OrderList>
      </div>
    </OrderInquiryContainer>
  );
};

export default OrderInquiry;

const OrderInquiryContainer = styled.div`
  text-align: center;
  padding: 5rem 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  >div{
    padding: 1.5rem;
  }
   h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const OrderList = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;

const OrderItem = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius:0.5rem;
  box-shadow: 1px 1px 1px rgba(150,150,150,0.5);
  margin-bottom: 1rem;
  cursor: pointer;
`;

const OrderImg = styled.span`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background: rgba(150, 150, 150, 0.5);
`;

const OrderNumber = styled.p`
  font-weight: bold;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const OrderDetails = styled.div`
  max-height: ${(props) => (props.expanded ? "3rem" : "0px")};
  display: ${(props) => (props.expanded ? "flex" : "none")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  padding: 1rem;
  
  >div>div{
    text-align:left;
    margin-left:1rem;
  }
`;
