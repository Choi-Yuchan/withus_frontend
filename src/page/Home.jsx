// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  const productlists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <ProductList>
          {productlists.map((product, index) => (
            <li key={index}>
              <ProductImage></ProductImage>
              <ProductDesc>
                <h4>Product{product}</h4>
                <span>
                  <p>100,000원</p>
                  <p>40%</p> | <p>300부</p>
                </span>
              </ProductDesc>
            </li>
          ))}
        </ProductList>
      </main>
      <Footer />
    </div>
  );
}

const ProductImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background-color: #f7f7f7;
`;

const ProductList = styled.ul`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  span {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    font-weight: 600;
    margin-bottom: 4px;
  }
`;
