import { styled } from "styled-components";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole(null);
    alert("로그아웃 되었습니다!");
  };

  // localStorage에서 role 값을 가져오고, 변경될 때마다 업데이트
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "role") {
        setRole(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
            <StyledAnchor href="/">청첩장</StyledAnchor>
            <StyledAnchor href="/temp">모바일</StyledAnchor>
            <StyledAnchor href="/temp">웨딩영상</StyledAnchor>
            <StyledAnchor href="/temp">감사장</StyledAnchor>
            <StyledAnchor href="/temp">초대장</StyledAnchor>
          </NavigationMain>
        </div>
        <TopRightNavigation>
          {role == "ROLE_USER" ? (
            <li>
              <StyledAnchor href="/" onClick={handleLogout}>
                로그아웃
              </StyledAnchor>
            </li>
          ) : (
            <>
              <li>
                <StyledAnchor href="/signup">회원가입</StyledAnchor>
              </li>
              <li>
                <StyledAnchor href="/login">로그인</StyledAnchor>
              </li>
            </>
          )}
          <li>
            {role === "ROLE_USER" ? (
              <StyledAnchor href="/cart">
                <FaShoppingCart />
              </StyledAnchor>
            ) : (
              <StyledAnchor href="/login">
                <FaShoppingCart />
              </StyledAnchor>
            )}
          </li>
          <li>
            {role === "ROLE_USER" ? (
              <StyledAnchor href="/mypage">
                <FaUser />
              </StyledAnchor>
            ) : (
              // 로그인되어 있지 않은 경우 로그인 페이지로 이동
              <StyledAnchor href="/login">
                <FaUser />
              </StyledAnchor>
            )}
          </li>
          <li>
            <StyledAnchor href="/temp">
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
