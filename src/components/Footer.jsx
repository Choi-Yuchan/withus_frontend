import { styled } from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter className="sub-font-color">
      <div>
        <CustomerCenter>
          <h3>고객센터</h3>
          <h4>1588-8080</h4>
          <p>평일 09:30 ~ 18:20</p>
        </CustomerCenter>
        <CompanyIntro>
          <h3>회사 소개</h3>
          <p>
            WithUs와 함께 당신의 인생에서 중요한 바로 그 날을 위한, 최고의 선택
          </p>
          <p>CREW: 최유찬, 강나미, 김용현, 박정암, 성진희, 허솔</p>
        </CompanyIntro>
      </div>
      <CompanyInfo>
        <p>서울 영등포구 영중로 56 신한빌딩 4층</p>
        <p>TEL: 02-701-1712 | E-MAIL: withus@google.com</p>
        <p>Copyright 2023. ㈜Withus All. right reserved.</p>
      </CompanyInfo>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
  background-color: #e3f3ff;
  border-top: 1px solid #8d9eff;
  width: 100%;
  > div:first-of-type {
    display: flex;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const CustomerCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  white-space: nowrap;

  h4 {
    font-size: 2rem;
    font-weight: 600;
    color: #333;
    margin-block: 0.5rem;
  }
`;

const CompanyIntro = styled.div`
  width: 100%;
  white-space: nowrap;
  h3 {
    margin-bottom: 0.5rem;
  }
  p:not(last-of-type) {
    margin-top: 0.5rem;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  p:not(last-of-type) {
    margin-right: 1rem;
    margin-top: 0.5rem;
  }
`;
