"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import { SidebarOpen } from "./SidebarOpen";
import { SidebarClose } from "./SidebarClose";
import { SidebarContainer } from "./SidebarContainer";
import { LogOutButton } from "./LogOutButton";

const SidebarContent = styled.div`
  padding: 0 20px 20px 20px;
  border-radius: 10px;
`;

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SidebarContainer $isOpen={isOpen}>
        <SidebarClose onClick={() => setIsOpen(false)}>
          <Icon icon={"material-symbols:close"} fontSize={"20px"}/>
        </SidebarClose>
        <SidebarContent>
          <h2>User Name</h2>
          <LogOutButton>Log Out</LogOutButton>
        </SidebarContent>
      </SidebarContainer>
      <SidebarOpen onClick={() => setIsOpen(true)}>
        <Icon icon={"quill:hamburger-sidebar"} fontSize={"20px"}/>
      </SidebarOpen>
    </>
  );
};
