import { styled } from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <NavigationTop>
        <div>Logo</div>
        <TopRightNavigation>
          <li>회원가입</li>
          <li>로그인</li>
          <li>장바구니</li>
          <li>내정보</li>
          <li>고객센터</li>
        </TopRightNavigation>
      </NavigationTop>
      <NavigationMain>
        <a href="#">청첩장</a>
        <a href="#">모바일</a>
        <a href="#">웨딩영상</a>
        <a href="#">감사장</a>
        <a href="#">초대장</a>
      </NavigationMain>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;
const NavigationTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const TopRightNavigation = styled.ul`
  display: flex;

  li:not(last-of-type) {
    margin-right: 0.5rem;
  }
`;
const NavigationMain = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 0.5rem;
`;
