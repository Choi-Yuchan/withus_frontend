// eslint-disable-next-line no-unused-vars
import { styled } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Button from "../components/Button";
import ToTopBtn from "../components/ToTopBtn";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const [itemList, setItemList] = useState({});
  const [imageList, setImageList] = useState([]);
  const [optValue, setOptValue] = useState(300);

  const { id } = useParams();

  useEffect(() => {
    const fetchItemList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/letter/detail/${id}`
        );
        const { data } = response;
        if (data) {
          setItemList(data);
          setImageList(data?.imgList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemList();
  }, [id]);

  const onHandleSelect = (e) => {
    const {
      target: { value },
    } = e;
    setOptValue(parseFloat(value));
  };
  const calculateDiscountedPrice = () => {
    const discount = 0.4; // 40% 할인
    return itemList?.wprice * optValue * (1 - discount);
  };
  const handleImageClick = (index) => {
    if (imageList[index]) {
      setImageList((prevImageList) => {
        const newImageList = [...prevImageList];
        newImageList[0] = imageList[index];
        return newImageList;
      });
    }
  };

  const addCartList = async (wid, wcount) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/cart/cartList?wid=${wid}&userNumber=${userNumber}&wcount=${wcount}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const userNumber = localStorage.getItem("userNumber");
  if (!userNumber) return <Navigate to={"/login"} replace />;
  return (
    <div className="main-font-color">
      <Header />
      <DetailMain>
        <ProductInfoSection>
          <div>
            <ProductImage>
              <img src={`/images/${imageList[0]?.filename}`} alt="main-item" />
            </ProductImage>
            <ProductDetailImageContainer>
              {imageList?.map((image, index) =>
                index > 0 ? (
                  <ProductDetailImage
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={`/images/${image.filename}`} alt="sub-image" />
                  </ProductDetailImage>
                ) : (
                  <React.Fragment key={index}></React.Fragment>
                )
              )}
            </ProductDetailImageContainer>
          </div>
          <ProductInfo>
            <div>{itemList?.wname}</div>
            <div>
              <ProductInfoTag>가격</ProductInfoTag>
              <Partition>|</Partition>
              <span>{itemList?.wprice}원</span>
            </div>
            <div>
              <ProductInfoTag>주문수량</ProductInfoTag>
              <Partition>|</Partition>
              <select
                name="quantity"
                id="quantity-select"
                onChange={(e) => {
                  onHandleSelect(e);
                }}
              >
                <option value="300">300부</option>
                <option value="200">200부</option>
                <option value="100">100부</option>
              </select>
            </div>
            <div>
              <ProductInfoTag>할인가</ProductInfoTag>
              <Partition>|</Partition>
              <span>{calculateDiscountedPrice()}원</span>
              <SaleTag className="sub-color-01">40% 할인</SaleTag>
            </div>
            <ButtonBox>
              <Button title={"구매하기"} />
              <Button
                title={"장바구니"}
                type={"cart"}
                onClick={() => addCartList(id, optValue)}
              />
            </ButtonBox>
            <div className="sub-font-color">상품코드:A492H2E</div>
          </ProductInfo>
        </ProductInfoSection>
        <ProductDetailSection>
          <h2>{itemList?.wname}</h2>
          <h4>
            카드의 전체 컬러가 주는 따뜻함과 세련된 디자인 위더스 청첩장의
            섬세한 디테일은 아름다운 웨딩에 완벽함을 더해줍니다.
            <br />
            위더스만의 행운, 평화를 웨딩카드에 담아 더욱 뜻 깊은 청첩장입니다.
          </h4>
          {imageList?.length > 0 &&
            imageList.map((image, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <>
                    {index == 1 ? (
                      <p>
                        레이저 커팅 기술: 당신의 청첩장은 위더스의 1등 기술력을
                        활용한 레이저 커팅 기법을 통해 정교하게 제작됩니다. 이
                        기술은 청첩장을 미니 예술작품으로 만들어줍니다.
                      </p>
                    ) : index == 2 ? (
                      <p>
                        웨딩 사진 레이어드: 청첩장 내부에 인쇄되는 웨딩 사진은
                        레이어드 기법을 활용하여 보다 감각적으로 디자인됩니다.
                        이로써 청첩장은 독특하고 특별한 느낌을 줍니다.
                      </p>
                    ) : index == 3 ? (
                      <p>
                        맞춤 설정: 원하는 사진과 예식 정보를 공유하면, 우리는
                        당신을 위한 맞춤 청첩장을 만들어 드립니다. 각각의
                        디테일을 신중하게 고려하여 완벽한 디자인을 선사합니다.
                      </p>
                    ) : index == 4 ? (
                      <p>
                        흔하지 않은 디자인: 위더스의 디자인은 흔하지 않은,
                        특별한 느낌을 강조합니다. 당신만의 청첩장을 통해 예식을
                        더욱 특별하게 만들어보세요.
                      </p>
                    ) : null}
                    <DetailImage>
                      <img
                        src={`/images/${image?.filename}`}
                        alt="detail image"
                      />
                    </DetailImage>
                  </>
                )}
                {index === 0 && (
                  <DetailImage>
                    <img
                      src={`/images/${image?.filename}`}
                      alt="detail image"
                    />
                  </DetailImage>
                )}
              </React.Fragment>
            ))}
          <h4>
            당신과 당신의 사랑하는 이들을 위한 특별한 순간을 기념하기 위해,
            위더스와 함께하세요.
            <br />
            당신의 청첩장은 고품질의 프린팅 기술과 아름다운 디자인으로 완벽하게
            완성될 것입니다.
          </h4>
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
  h4 {
    color: #777;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  p {
    margin-bottom: 2rem;
    color: #777;
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
  width: calc((400px / 5) - 0.5rem);
  aspect-ratio: 1/1;
  border-radius: 12px;
  gap: 0.5rem;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;
const ProductImage = styled.div`
  width: 400px;
  border-radius: 12px;
  background-color: #f7f7f7;
  margin-right: 5rem;
  margin-top: 2rem;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 12px;
  }
`;
const DetailImage = styled.div`
  width: 100%;
  border-radius: 12px;
  margin-block: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    aspect-ratio: 2/1;
    object-fit: cover;
    object-position: center;
  }
`;
