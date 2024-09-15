import styled from "styled-components";

interface SidebarProps {
  $isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  height: calc(100vh - 20px);
  width: 250px;
  background-color: #fff;
  border: #888c 1px solid;
  border-radius: 20px;
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 20px;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "-30px" : "-100%")});
  transition: transform 0.3s ease;
  overflow-x: hidden;
  z-index: 1000;

  @media (max-width: 420px) {
    width: calc(100% - 20px);
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    padding-left: 0;
  }
`;
