import { styled } from "styled-components";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

export const Header = () => {
  return (
    <StyledHeader>
      <NavigationTop>
        <LogoImageBox>
          <StyledAnchor href="/">
            <img src="/images/withus_logo.png" alt="withus_logo" />
          </StyledAnchor>
        </LogoImageBox>
        <TopRightNavigation>
          <li>
            <StyledAnchor href="/signup">회원가입</StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="/login">로그인</StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#">
              <FaShoppingCart />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#">
              <FaUser />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href="#">
              <RiCustomerService2Fill />
            </StyledAnchor>
          </li>
        </TopRightNavigation>
      </NavigationTop>
      <NavigationMain>
        <StyledAnchor href="#">청첩장</StyledAnchor>
        <StyledAnchor href="#">모바일</StyledAnchor>
        <StyledAnchor href="#">웨딩영상</StyledAnchor>
        <StyledAnchor href="#">감사장</StyledAnchor>
        <StyledAnchor href="#">초대장</StyledAnchor>
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
const LogoImageBox = styled.div`
  width: 80px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
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
  padding-block: 1rem;
  background-color: #b9e0ff;
  a {
    color: #f7f7f7;
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #666;
`;
