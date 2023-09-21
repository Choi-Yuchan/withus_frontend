import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";

const WithdrawalForm = ({ userNumber }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    if (Object.keys(errors).length === 0) {
      const withdrawalReason = data.withdrawalReason;
  
      try {
        const response = await fetch(`/user/${userNumber}/deleteUser`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ withdrawalReason }), 
        });
  
        if (response.status === 200) {
          alert("회원 탈퇴가 성공적으로 처리되었습니다.");
        } else {
          alert("회원 탈퇴 중 오류가 발생했습니다.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("회원 탈퇴 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>회원 탈퇴 이유:</Label>
        <Input
          type="text"
          name="withdrawalReason"
          ref={register}
        />
        {errors.withdrawalReason && (
          <ErrorText>회원탈퇴 사유를 알려주세요.</ErrorText>
        )}
        <Button type="submit" title={"회원탈퇴"}></Button>
      </form>
    </FormContainer>
  );
};


const FormContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ErrorText = styled.p`
  color: red;
`;


export default WithdrawalForm;
