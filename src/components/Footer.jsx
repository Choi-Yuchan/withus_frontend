import { styled } from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter className="main-font-color">
      <CustomerCenter>
        <h3>고객센터</h3>
        <h4>1588-8080</h4>
        <p className="sub-font-color">평일 09:30 ~ 18:20</p>
      </CustomerCenter>
      <CompanyInfo className="sub-font-color">
        <h3>회사 소개</h3>
        <p>
          WithUs와 함께 당신의 인생에서 중요한 바로 그 날을 위한, 최고의 선택
        </p>
        <p>CREW: 최유찬, 강나미, 김용현, 박정암, 성진희, 허솔</p>
      </CompanyInfo>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 2rem;
  background-color: #ccc;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const CustomerCenter = styled.div`
  h4 {
    font-size: 2rem;
    font-weight: 600;
    color: #fefefe;
    margin-block: 0.5rem;
  }
`;

const CompanyInfo = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
  p:not(last-of-type) {
    margin-top: 0.5rem;
  }
`;
