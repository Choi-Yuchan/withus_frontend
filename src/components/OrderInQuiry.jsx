import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OrderInquiry = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  useEffect(() => {
    // 주문 정보를 서버에서 가져오는 로직을 여기에 추가
    // 실제 데이터 가져오는 부분은 API 호출 등을 사용
    const dummyOrders = [
      {
        id: 1,
        orderNumber: "ORD12345",
        product: "Product A",
        quantity: 2,
        details: "상세 정보 1",
      },
      {
        id: 2,
        orderNumber: "ORD67890",
        product: "Product B",
        quantity: 1,
        details: "상세 정보 2",
      },
      {
        id: 3,
        orderNumber: "ORD13579",
        product: "Product C",
        quantity: 1,
        details: "상세 정보 3",
      },
      {
        id: 4,
        orderNumber: "ORD24680",
        product: "Product D",
        quantity: 1,
        details: "상세 정보 4",
      },
      {
        id: 5,
        orderNumber: "ORD123890",
        product: "Product E",
        quantity: 1,
        details: "상세 정보 5",
      },
      {
        id: 6,
        orderNumber: "ORD456789",
        product: "Product F",
        quantity: 1,
        details: "상세 정보 6",
      },
      // 더 많은 주문 정보를 추가할 수 있습니다.
    ];

    setOrders(dummyOrders);
  }, []);

  // 주문 상세 정보 토글 핸들러
  const handleOrderToggle = (orderId) => {
    if (expandedOrder === orderId) {
      // 이미 확장된 상태인 경우 닫기
      setExpandedOrder(null);
    } else {
      // 다른 주문을 클릭하여 확장
      setExpandedOrder(orderId);
    }
  };

  return (
    <OrderInquiryContainer>
      <div>
      <h2>주문 조회</h2>
      <OrderList>
        {orders.map((order) => (
          <OrderItem key={order.id}>
            <OrderNumber onClick={() => handleOrderToggle(order.id)}>
              주문번호: {order.orderNumber}
            </OrderNumber>
            <OrderDetails expanded={expandedOrder === order.id}>
              <OrderImg></OrderImg>
              <div>
                <div>상품: {order.product}</div>
                <div>수량: {order.quantity}</div>
                <div>상세 정보: {order.details}</div>
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
