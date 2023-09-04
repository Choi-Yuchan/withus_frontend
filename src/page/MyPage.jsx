import Button from "components/Button";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import React, { useState } from "react";

const MyPage = () => {
    const [userInfo, setUserInfo] = useState({
        username: '사용자 이름',
        number: '010-0000-0000',
        address: 'korea, seoul, jong-no 336, 201'
    })
    const handleEdit = () => {
        setUserInfo({
            username: 'new name',
            number: 'new number',
            address: 'new address',
        });
    };
  return (
    <div>
      <Header />
      <div>
        <h2>마이 페이지</h2>
        <div>
            <p>사용자 이름: {userInfo.username}</p>
            <p>전화번호:{userInfo.number}</p>
            <p>주소:{userInfo.address}</p>
        </div>
        <Button title={"정보수정"} onClick={handleEdit} />
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
