"use client";

import { useEffect, useState } from "react";
import { Post, PostsWrapper } from "./components";
import axios from "axios";
import { post } from "@/app/types/post";

export default function Posts() {
  const [posts, setPosts] = useState<post[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/BAHAA-THE-KING/nextjs-test/posts"
      )
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <PostsWrapper>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          user_name={post.user_name}
          user_image={post.user_image}
          date={post.date}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
          content={post.content}
          image={post.image}
        />
      ))}
    </PostsWrapper>
  );
}
