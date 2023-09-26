import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { useState } from "react";
import "../styles/carouselStyle.css";

const items = [
  {
    img: "/images/mainbanner_01.jpg",
    text: "감동적인 메시지와 사진을 공유하세요.",
  },
  {
    img: "/images/mainbanner_02.jpg",
    text: "특별한 순간을 공유하고 이야기를 함께 만들어요.",
  },
  {
    img: "/images/mainbanner_03.jpg",
    text: "사랑과 행복으로 가득 찬 날에 여러분을 초대합니다.",
  },
  {
    img: "/images/mainbanner_04.jpg",
    text: "청첩장 슬라이드로 감동을 더하고 이벤트를 더욱 특별하게 만들어요.",
  },
  {
    img: "/images/mainbanner_05.jpg",
    text: "축하 메시지와 사진을 공유하고 모든 이벤트 정보를 한눈에!",
  },
  {
    img: "/images/mainbanner_06.jpg",
    text: "위더스만의 행운, 평화를 웨딩카드에 담아 더욱 뜻 깊은 청첩장입니다.",
  },
];
const handleDragStart = (e) => e.preventDefault();
const Mainitems = (items, [setMainIndex, setMainAnimation]) => {
  return items.map((item, i) => {
    return (
      <ItemsContain
        key={i}
        onClick={() => (setMainIndex(i), setMainAnimation(true))}
        onDrag={handleDragStart}
      >
        <ItemsWrap>
          <img src={item.img} alt="mainbanner" />
        </ItemsWrap>
        <h4>{item.text}</h4>
      </ItemsContain>
    );
  });
};
export const Carousel = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [mainItems] = useState(
    Mainitems(items, [setMainIndex, setMainAnimation])
  );

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 1,
    },
  };

  // console.log({ mainAnimation, mainIndex, mainItems });
  const slideNext = () => {
    if (!mainAnimation && mainIndex < mainItems.length - 1) {
      // setMainAnimation(true);
      setMainIndex((prevIndex) => prevIndex + 1);
    }
    if (!mainAnimation && mainIndex == mainItems.length - 1) {
      setMainIndex(1);
    }
  };

  const slidePrev = () => {
    if (!mainAnimation && mainIndex > 0) {
      // setMainAnimation(true);
      setMainIndex((prevIndex) => prevIndex - 1);
    }
  };

  const onSlideChange = (e) => {
    setMainAnimation(true);
    if (e.item == mainItems.length - 1) {
      setMainIndex(1);
    }
  };
  const onSlideChanged = (e) => {
    if (e.type == "action") {
      setMainIndex(e.item);
      setMainAnimation(false);
    } else {
      setMainIndex(e.item);
    }
  };
  const renderDotsItem = ({ isActive }) => {
    return isActive ? <ActiveDotBtn /> : <DotBtn />;
  };

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        activeIndex={mainIndex}
        infinite={true}
        animationDuration={1000}
        disableButtonsControls
        responsive={responsive}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        renderDotsItem={renderDotsItem}
        autoPlay
        items={mainItems}
        touchTracking={!mainAnimation}
      />
      <PrevBtn className="btn-prev" onClick={slidePrev}>
        <LeftArrow />
      </PrevBtn>
      <NextBtn className="btn-next" onClick={slideNext}>
        <RightArrow />
      </NextBtn>
    </Contain>
  );
};
export default Carousel;

const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`;

const ItemsContain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  h4 {
    width: 35%;
    position: absolute;
    top: 50%;
    left: 3rem;
    font-size: 2rem;
    font-family: "Gowun Dodum", sans-serif;
    color: #333;
    transform: translateY(-50%);
  }
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PrevBtn = styled.div`
  position: absolute;
  font-size: 2rem;
  cursor: pointer;
`;
const NextBtn = styled(PrevBtn)`
  right: 0;
`;

const DotBtn = styled.span`
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #fefefe;
  &:not(last-of-type) {
    margin-right: 1rem;
  }
`;

const ActiveDotBtn = styled(DotBtn)`
  background-color: #8d9eff;
`;

const Arrow = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  margin-inline: 0.5rem;
`;

const LeftArrow = styled(Arrow)`
  border-width: 15px 20px 15px 0;
  border-color: transparent #8d9eff transparent transparent;
`;

const RightArrow = styled(Arrow)`
  border-width: 15px 0 15px 20px;
  border-color: transparent transparent transparent #8d9eff;
`;
