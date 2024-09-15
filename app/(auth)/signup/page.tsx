"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { FormWrapper, Input, Wrapper } from "../components";
import { useAccountData, useToken } from "@/app/hooks";
import { signupAPI } from "../APIs/signup";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const SignupForm = styled.div`
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
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{
    userName: string;
    password: string;
  }>();
  const [, setToken] = useToken();
  const [, setAccountData] = useAccountData();
  return (
    <Wrapper>
      <FormWrapper>
        <Title>Welcome!</Title>
        <Subtitle>Sign up a new account</Subtitle>
        <SignupForm>
          <Input
            type="text"
            placeholder="User Name"
            {...register("userName", {
              required: "This Field Is Required.",
              validate: (value) =>
                value.length >= 3 ? true : "Length must be greater than 3",
            })}
            error={errors?.userName?.message ?? ""}
          />
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This Field Is Required.",
              validate: (value) =>
                value.length >= 8 ? true : "Length must be greater than 8",
            })}
            error={errors?.password?.message ?? ""}
          />
          <Button
            onClick={handleSubmit((data) => {
              signupAPI(data, setToken, setAccountData, router);
            })}
          >
            Sign up
          </Button>
        </SignupForm>
        <FooterText>
          Already have an account? <Link href={"/login"}>Log In</Link>
        </FooterText>
      </FormWrapper>
    </Wrapper>
  );
}
