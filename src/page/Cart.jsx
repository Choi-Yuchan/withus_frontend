import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { styled } from "styled-components";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Button from "components/Button";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartData, setCartData] = useState([]);

  const userNumber = localStorage.getItem("userNumber");

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/cart/cartList/${userNumber}`
        );

        setCartData(response.data);
      } catch (error) {
        console.error("데이터 가져오기 오류", error);
      }
    };
    fetchData(cartData);
  }, [cartData]);

  if (!userNumber) return <Navigate to={"/login"} replace />;
  return (
    <div>
      <Header />
      <CartMain>
        <h1>CART</h1>

        <section>
          <Table>
            <thead>
              <tr>
                <Th>선택</Th>
                <Th>상품이미지</Th>
                <Th>상품명</Th>
                <Th>개별가격</Th>
                <Th>사이즈</Th>
                <Th>부수</Th>
                <Th>총가격</Th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <TableRow key={item.id}>
                  <CheckboxTd>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </CheckboxTd>
                  <Td>
                    <ProductImage />
                  </Td>
                  <Td>{item.wname}</Td>
                  <Td>{item.wprice}</Td>
                  <Td>{item.wid}</Td>
                  <Td>{item.wcount}</Td>
                  <Td>{item.total_price}</Td>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <Pagination>
            <ArrowButton>
              <BiSolidLeftArrow />
            </ArrowButton>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <PageNumber key={index} className={index === 0 ? "active" : ""}>
                {item}
              </PageNumber>
            ))}
            <ArrowButton>
              <BiSolidRightArrow />
            </ArrowButton>
          </Pagination>
        </section>
        <Button title={"주문하기"} />
      </CartMain>
      <Footer />
    </div>
  );
};

export default Cart;

const CartMain = styled.main`
  width: 100%;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 60px;

  h1 {
    margin-block: 3rem;
    font-size: 3rem;
    font-weight: 700;
    border-bottom: 2px double #ccc;
  }
  section {
    margin-bottom: 3rem;
    width: 80%;
    min-width: 500px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  vertical-align: middle;
`;

const CheckboxTd = styled(Td)`
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const ProductImage = styled.div`
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 12px;
  background-color: #f7f7f7;
  margin: 0 auto;
`;

const Pagination = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageNumber = styled.span`
  margin: 0 8px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  &.active {
    background-color: #8d9eff;
    color: white;
    border-color: #8d9eff;
  }
`;
const ArrowButton = styled.button`
  margin: 0 4px;
  padding: 4px 8px;
  border: none;
  background-color: #8d9eff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6c4ab6;
  }
`;
