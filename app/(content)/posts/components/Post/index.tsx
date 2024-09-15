"use client";

import { post } from "@/app/types/post";

import { PostWrapper } from "./PostWrapper";
import { DataSection } from "./DataSection";
import { InteractionsSection } from "./InteractionsSection";
import { UserSection } from "./UserSection";

export const Post: React.FC<post> = ({
  user_image,
  user_name,
  date,
  content,
  image,
  likes,
  comments,
  shares,
}) => {
  return (
    <PostWrapper>
      <UserSection date={date} user_image={user_image} user_name={user_name} />
      <DataSection content={content} image={image} />
      <InteractionsSection comments={comments} shares={shares} likes={likes} />
    </PostWrapper>
  );
};
