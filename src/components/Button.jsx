import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ $type }) => ($type == "cart" ? "#b9e0ff" : "#8d9eff")};
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background: #cecece;
    cursor: not-allowed;
  }
`;

const Button = ({ title, type = "default", disabled = false, onClick }) => {
  return (
    <StyledButton $type={type} disabled={disabled} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
