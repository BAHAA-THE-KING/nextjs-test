"use client";

import styled from "styled-components";

const UserSectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserNameDate = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const PostDate = styled.span`
  font-size: 12px;
  color: gray;
`;

export function UserSection({
  user_image,
  user_name,
  date,
}: {
  user_image: string;
  user_name: string;
  date: string;
}) {
  return (
    <UserSectionContainer>
      <UserImage src={user_image} alt={user_name} />
      <UserNameDate>
        <UserName>{user_name}</UserName>
        <PostDate>{date}</PostDate>
      </UserNameDate>
    </UserSectionContainer>
  );
}
