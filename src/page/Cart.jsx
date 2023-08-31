import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { styled } from "styled-components";
// import { styled } from "styled-components";

const Cart = () => {
  return (
    <div>
      <Header />
      <CartMain>
        <h1>장바구니</h1>
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
  padding-top: 60px;
`;
