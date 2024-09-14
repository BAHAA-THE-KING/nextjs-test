"use client";

import styled from "styled-components";

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
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        {likes} Likes
      </InteractionItem>
      <InteractionItem>
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h9v-2h-9c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.3-.31 2.53-.84 3.61C17.84 14.41 15.05 13 12 13v2c2.21 0 4.22 1.12 5.45 2.86.87-.85 1.55-1.88 2.03-3.01C20.82 12.96 21 12 21 12c0-4.97-4.03-9-9-9z"
          />
        </svg>
        {comments} Comments
      </InteractionItem>
      <InteractionItem>
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17 10.5V3H3v18h9.5c.85 0 1.68-.24 2.39-.69l7.61-5.06c.93-.62.93-1.98 0-2.6l-7.61-5.06c-.71-.45-1.54-.69-2.39-.69zm0 3L10.5 18H6v-6h4.5l6.5 4.5zm-1.5-.5L18 13.5V9.5l-6-4.5H6v6h9.5l.5.5z"
          />
        </svg>
        {shares} Shares
      </InteractionItem>
    </InteractionSectionContainer>
  );
}
