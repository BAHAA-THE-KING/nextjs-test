"use client";

import { user } from "@/app/types/user";

import styled from "styled-components";

const UserWrapper = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  max-width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export function User({ name }: user) {
  return (
    <UserWrapper>
      <UserName>{name}</UserName>
    </UserWrapper>
  );
}
