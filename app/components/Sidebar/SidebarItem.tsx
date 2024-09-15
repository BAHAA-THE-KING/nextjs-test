import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import styled from "styled-components";

const Item = styled.div`
  width: calc(100% - 20px);
  border: none;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const SidebarItem: React.FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => {
  const router = useRouter();
  return <Item onClick={() => router.push(to)}>{children}</Item>;
};
