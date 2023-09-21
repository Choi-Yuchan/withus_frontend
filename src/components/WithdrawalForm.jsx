import React from "react";
import { useForm } from "react-hook-form";

const WithdrawalForm = ({ userNumber }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length === 0) {
      // "withdrawalReason" 입력 필드의 값을 가져옴
      const withdrawalReason = data.withdrawalReason;
  
      // 유효성 검사를 통과한 경우에만 회원 탈퇴 API 호출
      try {
        const response = await fetch(`/user/${userNumber}/deleteUser`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // 필요한 인증 토큰 등을 포함해야 합니다.
          },
          body: JSON.stringify({ withdrawalReason }), // 데이터를 JSON 형태로 전송
        });
  
        if (response.status === 200) {
          // 회원 탈퇴가 성공한 경우
          alert("회원 탈퇴가 성공적으로 처리되었습니다.");
          // 로그아웃 또는 다른 필요한 작업 수행
        } else {
          // 회원 탈퇴가 실패한 경우
          alert("회원 탈퇴 중 오류가 발생했습니다.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("회원 탈퇴 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>회원 탈퇴 이유:</label>
      <input
        type="text"
        name="withdrawalReason"
        ref={register} // 이 필드를 등록합니다.
      />
      {errors.withdrawalReason && (
        <p style={{ color: "red" }}>이유를 입력하세요.</p>
      )}
      <button type="submit">회원 탈퇴</button>
    </form>
  );
};

export default WithdrawalForm;
