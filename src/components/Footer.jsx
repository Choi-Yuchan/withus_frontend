import { styled } from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h3>고객센터</h3>
        <h4>1588-8080</h4>
        <p>평일 09:30 ~ 18:20</p>
      </div>
      <div>
        <h3>회사 소개</h3>
        <p>
          WithUs와 함께 당신의 인생에서 중요한 바로 그 날을 위한, 최고의 선택
        </p>
        <p>CREW: 최유찬, 강나미, 김용현, 박정암, 성진희, 허솔</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 2rem;
  background-color: #f7f7f7;
`;
