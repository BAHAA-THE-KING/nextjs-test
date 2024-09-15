"use client";

import Link from "next/link";
import styled from "styled-components";

import { FormWrapper, Input, Wrapper } from "./components";
import { useForm } from "react-hook-form";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  color: white;
  background-color: #764ba2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #667eea;
  }
`;

const FooterText = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;

  a {
    color: #764ba2;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Login() {
  const { register, handleSubmit } = useForm<{
    userName: string;
    password: string;
  }>();
  return (
    <Wrapper>
      <FormWrapper>
        <Title>Welcome Back!</Title>
        <Subtitle>Login to your account</Subtitle>
        <LoginForm>
          <Input
            type="text"
            placeholder="User Name"
            {...(register("userName"), { required: true })}
          />
          <Input
            type="password"
            placeholder="Password"
            {...(register("password"), { required: true })}
          />
          <Button onClick={handleSubmit(() => {})}>Login</Button>
        </LoginForm>
        <FooterText>
          Don&apos;t have an account? <Link href={"/signup"}>Sign up</Link>
        </FooterText>
      </FormWrapper>
    </Wrapper>
  );
}
