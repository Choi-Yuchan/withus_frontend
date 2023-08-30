import { styled } from "styled-components";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledHeader className="main-font-color" $scrollY={scrollY}>
      <NavigationTop>
        <div className="topLeftNavigation">
          <LogoImageBox>
            <StyledAnchor href="/">
              <img src="/images/withus_logo.png" alt="withus_logo" />
              WithUs
            </StyledAnchor>
          </LogoImageBox>
          <NavigationMain>
            <StyledAnchor href="#">청첩장</StyledAnchor>
            <StyledAnchor href="#">모바일</StyledAnchor>
            <StyledAnchor href="#">웨딩영상</StyledAnchor>
            <StyledAnchor href="#">감사장</StyledAnchor>
            <StyledAnchor href="#">초대장</StyledAnchor>
          </NavigationMain>
        </div>
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
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 20;
  background-color: ${({ $scrollY }) =>
    $scrollY > 60 ? "#fefefe" : "transparent"};
  box-shadow: ${({ $scrollY }) =>
    $scrollY > 60 ? "1px 1px 2px #ccc" : "none"};
`;
const NavigationTop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  .topLeftNavigation {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
const LogoImageBox = styled.div`
  width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
  a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-family: cursive;
  }
`;
const TopRightNavigation = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  li:not(last-of-type) {
    margin-right: 1rem;
  }
`;
const NavigationMain = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 1rem;
  width: 100%;
  margin-left: 100px;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #666;
`;
