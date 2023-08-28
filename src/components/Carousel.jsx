import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
import "../styles/carouselStyle.css";

const items = [
  "/images/mainbanner_01.jpg",
  "/images/mainbanner_02.jpg",
  "/images/mainbanner_03.jpg",
  "/images/mainbanner_04.jpg",
  "/images/mainbanner_05.jpg",
  "/images/mainbanner_06.jpg",
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
          <img src={item} alt="mainbanner" />,
        </ItemsWrap>
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

  console.log({ mainAnimation, mainIndex, mainItems });
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
        <BiSolidLeftArrow />
      </PrevBtn>
      <NextBtn className="btn-next" onClick={slideNext}>
        <BiSolidRightArrow />
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
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 20px;

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
  // color: #cecece;
`;
const NextBtn = styled(PrevBtn)`
  right: 0;
`;

const DotBtn = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fefefe;
  &:not(last-of-type) {
    margin-right: 1rem;
  }
`;

const ActiveDotBtn = styled(DotBtn)`
  background-color: #ccc;
`;
