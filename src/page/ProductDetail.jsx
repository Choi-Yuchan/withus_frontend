// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Button from "../components/Button";
import ToTopBtn from "../components/ToTopBtn";

export default function ProductDetail() {
  const detailImages = [1, 2, 3, 4, 5];

  return (
    <div className="main-font-color">
      <Header />
      <DetailMain>
        <ProductInfoSection>
          <div>
            <ProductImage />
            <ProductDetailImageContainer>
              {detailImages.map((image, index) => (
                <ProductDetailImage key={index}>{image}</ProductDetailImage>
              ))}
            </ProductDetailImageContainer>
          </div>
          <ProductInfo>
            <div>Product</div>
            <div>
              <ProductInfoTag>가격</ProductInfoTag>
              <Partition>|</Partition>
              <span>1,250원</span>
            </div>
            <div>
              <ProductInfoTag>주문수량</ProductInfoTag>
              <Partition>|</Partition>
              <select name="quantity" id="quantity-select">
                <option value="300부">300부</option>
                <option value="200부">200부</option>
                <option value="100부">100부</option>
              </select>
            </div>
            <div>
              <ProductInfoTag>할인가</ProductInfoTag>
              <Partition>|</Partition>
              <span>262,500원</span>
              <SaleTag className="sub-color-01">40% 할인</SaleTag>
            </div>
            <ButtonBox>
              <Button title={"구매하기"} />
              <a href="/cart">
                <Button title={"장바구니"} type={"cart"} />
              </a>
            </ButtonBox>
            <div className="sub-font-color">상품코드:A492H2E</div>
          </ProductInfo>
        </ProductInfoSection>
        <ProductDetailSection>
          <h2>Noble Green</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            quam magni natus possimus sint dolor aspernatur! Impedit animi
            corrupti minus aperiam quia repellat accusamus dolores. Nostrum
            voluptatum illum blanditiis dolore.
          </p>
          <DetailImage />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            quam magni natus possimus sint dolor aspernatur! Impedit animi
            corrupti minus aperiam quia repellat accusamus dolores. Nostrum
            voluptatum illum blanditiis dolore.
          </p>
        </ProductDetailSection>
        <ToTopBtn />
      </DetailMain>
      <Footer />
    </div>
  );
}
const ProductDetailSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-block: 2rem;

  div:first-of-type {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  button:first-of-type {
    margin-right: 1rem;
  }
`;

const ProductInfo = styled.div`
  padding-block: 1rem;
  width: 30vw;
  div {
    display: flex;
    align-items: center;
  }
  div:not(last-of-type) {
    margin-bottom: 1rem;
  }
  div:first-of-type {
    font-weight: 600;
    font-size: 3rem;
  }
`;
const SaleTag = styled.span`
  margin-left: 1rem;
  font-size: 0.75rem;
`;
const Partition = styled.p`
  color: #777;
  margin-right: 1rem;
`;
const ProductInfoTag = styled.span`
  color: #777;
  width: 100px;
`;
const ProductInfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  border-bottom: 2px solid #ccc;
`;
const DetailMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  padding-inline: 5%;

  section {
    width: 100%;
  }
`;
const ProductDetailImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-right: 5rem;
  gap: 0.5rem;
`;
const ProductDetailImage = styled.div`
  width: calc((30vw / 5) - 0.5rem);
  aspect-ratio: 1/1;
  border-radius: 12px;
  background-color: #f7f7f7;
  gap: 0.5rem;
`;
const ProductImage = styled.div`
  width: 30vw;
  aspect-ratio: 1/1;
  border-radius: 12px;
  background-color: #f7f7f7;
  margin-right: 5rem;
`;
const DetailImage = styled.div`
  width: 100%;
  aspect-ratio: 2/1;
  border-radius: 12px;
  background-color: #f7f7f7;
  margin-block: 1rem;
`;
