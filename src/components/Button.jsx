import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ $type }) => ($type == "cart" ? "#b9e0ff" : "#8d9eff")};
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = ({ title, type = "default" }) => {
  return <StyledButton $type={type}>{title}</StyledButton>;
};

export default Button;
