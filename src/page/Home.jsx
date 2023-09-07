// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Carousel from "../components/Carousel";

export default function Home() {
  const productlists = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="main-font-color">
      <Header />
      <main>
        <Carousel />
        <ProductSection>
          <h2>인기 있는 청첩장</h2>
          <ProductList>
            {productlists.map((product, index) => (
              <li key={index}>
                <a href={`/product/${index}`}>
                  <ProductImage></ProductImage>
                  <ProductDesc>
                    <h4>Product{product}</h4>
                    <span>
                      <ProductPriceLabel>
                        <p>100,000원</p>
                        <p>40%</p>
                      </ProductPriceLabel>
                      <span>300부</span>
                    </span>
                  </ProductDesc>
                </a>
              </li>
            ))}
          </ProductList>
        </ProductSection>
      </main>
      <Footer />
    </div>
  );
}

const ProductImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  background-color: #f7f7f7;
`;
const ProductSection = styled.section`
  padding-block: 3rem;
  padding-inline: 10vw;

  h2 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
const ProductList = styled.ul`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;

  li {
    width: 100%;
  }
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  span {
    display: inline-flex;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 4px;
  }
`;

const ProductPriceLabel = styled.span`
  p {
    margin-right: 0.5rem;
  }
  p:last-child {
    color: #8d72e1;
  }
  &::after {
    content: "|";
    display: inline-block;
    color: #777;
    margin-right: 0.5rem;
  }
`;
