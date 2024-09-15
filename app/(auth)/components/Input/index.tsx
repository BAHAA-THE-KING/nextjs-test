"use client";

import { forwardRef, LegacyRef } from "react";
import styled from "styled-components";

const NormalInput = styled.input<{ $error: string }>`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ddd")};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ $error }) => ($error ? "red" : "#764ba2")};
    box-shadow: ${({ $error }) =>
      $error
        ? "0 0 5px rgba(255, 0, 0, 0.5)"
        : "0 0 5px rgba(118, 75, 162, 0.5)"};
    outline: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  white-space: nowrap;
`;

interface InputWithErrorProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

export const Input = forwardRef(
  (
    { error, ...props }: InputWithErrorProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <InputWrapper>
        <NormalInput $error={error} {...props} ref={ref} />
        <div style={{ textAlign: "left" }}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";
