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
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const ToTopBtn = () => {
  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <BtnContainer>
      <StyledButton onClick={() => moveToTop()}>TOP</StyledButton>
    </BtnContainer>
  );
};

export default ToTopBtn;
