"use client";

import styled from "styled-components";

const Content = styled.div`
  font-size: 14px;
  margin: 10px 0;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 15px;
`;

export function DataSection({
  content,
  image,
}: {
  content?: string;
  image?: string;
}) {
  return (
    <>
      {content && <Content>{content}</Content>}
      {image && <PostImage src={image} alt="Post image" />}
    </>
  );
}
