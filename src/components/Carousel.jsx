import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

export const Carousel = () => {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 1,
    },
  };

  const handleDragStart = (e) => e.preventDefault();

  const images = [
    "/images/mainbanner_01.jpg",
    "/images/mainbanner_02.jpg",
    "/images/mainbanner_03.jpg",
    "/images/mainbanner_04.jpg",
    "/images/mainbanner_05.jpg",
    "/images/mainbanner_06.jpg",
  ];

  const items = images.map((image, index) => {
    return (
      <ItemsContain key={index}>
        <ItemsWrap onDrag={handleDragStart}>
          <img src={image} alt="" />
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
        paddingRight={40}
      />
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
