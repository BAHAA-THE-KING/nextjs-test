"use client";

import styled from "styled-components";
import { Icon } from "@iconify/react";

const InteractionSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const InteractionItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: gray;

  & > svg {
    margin-right: 5px;
  }
`;

export function InteractionsSection({
  comments,
  likes,
  shares,
}: {
  likes: number;
  comments: number;
  shares: number;
}) {
  return (
    <InteractionSectionContainer>
      <InteractionItem>
        <Icon icon="mdi:like" />
        {likes} Likes
      </InteractionItem>
      <InteractionItem>
        <Icon icon={"ant-design:comment-outlined"} />
        {comments} Comments
      </InteractionItem>
      <InteractionItem>
        <Icon icon={"mdi:share"} />
        {shares} Shares
      </InteractionItem>
    </InteractionSectionContainer>
  );
}
