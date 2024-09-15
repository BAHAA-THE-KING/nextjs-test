"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { User, UsersWrapper } from "./components";
import { user } from "@/app/types/user";

export default function Users() {
  const [users, setUsers] = useState<user[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/BAHAA-THE-KING/nextjs-test/users"
      )
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <UsersWrapper>
      {users.map((user) => {
        return <User key={user.id} id={user.id} name={user.name} />;
      })}
    </UsersWrapper>
  );
}
