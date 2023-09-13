import React from "react";
import styled, { keyframes } from "styled-components";

// 회전 애니메이션을 정의합니다.
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
// 스피너 컴포넌트 스타일을 정의합니다.
const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #8d9eff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

// Spinner 컴포넌트를 정의합니다.
const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;
