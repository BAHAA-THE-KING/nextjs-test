"use client";

import styled from "styled-components";

export const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #764ba2;
    box-shadow: 0 0 5px rgba(118, 75, 162, 0.5);
    outline: none;
  }
`;
