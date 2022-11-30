import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";
export type ButtonWidth = "homeButton" | "emptyCartButton" | "finalizeButton";

interface ButtonContainerProps {
  variant: ButtonVariant;
  width: ButtonWidth;
}

const buttonVariants = {
  primary: '#009EDD',
  secondary: '#039B00'
};

const buttonWidhts = {
  homeButton: "280px",
  emptyCartButton: "180px",
  finalizeButton: "235px",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  border-radius: 0.20rem;
  color: #FFF;
  font-weight: 700;
  border: none;

  background-color: ${props => props.color};

  ${({ variant, width }) => {
    return css`
      background-color: ${buttonVariants[variant]};
      width: ${buttonWidhts[width]};
    `;
  }}
`;
