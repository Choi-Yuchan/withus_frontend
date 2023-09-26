// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Carousel from "../components/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [itemList, setItemList] = useState([]);
  const fetchItemList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/letter/letterList`
      );
      setItemList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchItemList();
  }, []);

  return (
    <div className="main-font-color">
      <Header />
      <main>
        <Carousel />
        <ProductSection>
          <h2>인기 있는 청첩장</h2>
          <ProductList>
            {itemList?.map((item, index) => (
              <li key={index}>
                <Link to={`/product/${index + 1}`}>
                  <ProductImage>
                    <img src={`/images/${item.imgList[0].filename}`} alt="" />
                  </ProductImage>
                  <ProductDesc>
                    <h4>{item.wname}</h4>
                    <span>
                      <ProductPriceLabel>
                        <p>
                          {parseInt(item.wprice * 300, 10).toLocaleString()}원
                        </p>
                        <p>40%</p>
                      </ProductPriceLabel>
                      <span>300부</span>
                    </span>
                  </ProductDesc>
                </Link>
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
  display: flex;
  justify-content: center;

  img {
    width: 300px;
    border-radius: 1rem;
  }
`;
const ProductSection = styled.section`
  padding-block: 3rem;
  padding-inline: 10vw;

  h2 {
    font-weight: 600;
    font-size: 2rem;
    padding-left: 5rem;
    margin-bottom: 1rem;
  }
`;
const ProductList = styled.ul`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 2rem;
  justify-items: center;
  align-items: center;

  li {
    width: 100%;
    border-bottom: 1px solid #e5cf87;
  }
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

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
