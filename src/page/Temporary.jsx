import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styled from "styled-components";

const Temporary = () => {
  return (
    <main>
      <Header />
      <ComingSoon>
        {/* <img src="./images/comingsoon.jpeg" alt="comingsoon" /> */}
      </ComingSoon>
      <Footer />
    </main>
  );
};

export default Temporary;

const ComingSoon = styled.section`
  width: 100%;
  height: calc(100vh - 152px);
  background-image: url("./images/comingsoon.jpeg");
  background-size: contatin;
  background-position: center;
  background-repeat: no-repeat;
`;
