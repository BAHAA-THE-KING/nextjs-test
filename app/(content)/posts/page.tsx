import { Post } from "./components";

export default function Posts() {
  return (
    <Post
      user_name="Ahmad Ramadan"
      user_image="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
      date="2024/09/15"
      likes={30}
      comments={10}
      shares={20}
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic praesentium unde similique asperiores eveniet, molestiae quisquam animi nihil ut incidunt, qui veritatis dolor voluptatum voluptate quam laudantium labore, eos laborum."
    />
  );
}
