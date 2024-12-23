import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, SubmitBtn, ErrorMsg } from '../../styles/auth/authStyles';
import { useAuthForm } from '../../hooks/use-Form';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 10rem;
`

const LoginPage = () => {
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid }, trigger } = useAuthForm('login');

  const onSubmit = (data) => {
    console.log('폼 데이터 제출');
    console.log(data);
  };

  return (
    <PageContainer>
      <h1>로그인</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type={"email"}
          {...register("email")}
          placeholder="이메일을 입력해주세요!"
          onBlur={() => { trigger("email"); setIsVisibleEmail(true); }}
        />
        {isVisibleEmail && <ErrorMsg>{errors.email?.message}</ErrorMsg>}

        <Input
          type={"password"}
          {...register("password")}
          placeholder="비밀번호를 입력해주세요!"
          onBlur={() => { trigger("password"); setIsVisiblePwd(true); }}
        />
        {isVisiblePwd && <ErrorMsg>{errors.password?.message}</ErrorMsg>}

        <SubmitBtn type={"submit"} disabled={!isValid}>로그인</SubmitBtn>
      </form>
    </PageContainer>
  );
};

export default LoginPage;