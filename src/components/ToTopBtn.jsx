import { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: #8d9eff;
  color: white;
  border-style: none;
  box-shadow: 1px 1px 1px #ccc, -1px -1px 1px #ccc;
`;

const BtnContainer = styled.div`
  position: sticky;
  bottom: 1rem;
  width: 100%;
  display: ${({ $isShow }) => ($isShow ? "flex" : "none")};
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const ToTopBtn = () => {
  const [isShow, setIsShow] = useState(false);
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BtnContainer $isShow={isShow}>
      <StyledButton onClick={() => moveToTop()}>TOP</StyledButton>
    </BtnContainer>
  );
};

export default ToTopBtn;
