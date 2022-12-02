import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";
export type ButtonWidth = "homeButton" | "emptyCartButton" | "finalizeButton";

interface ButtonContainerProps {
  variant: ButtonVariant;
  width: ButtonWidth;
}

const buttonVariants = {
  primary: "#009EDD",
  secondary: "#039B00",
};

const buttonWidhts = {
  homeButton: "280px",
  emptyCartButton: "180px",
  finalizeButton: "235px",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  border-radius: 0.2rem;
  color: #2f2e41;
  font-weight: 700;
  border: none;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant, width }) => {
    return css`
      background-color: ${buttonVariants[variant]};
      width: ${buttonWidhts[width]};
      cursor: ${variant === "primary" ? "pointer" : "not-allowed"};
    `;
  }}

  span {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    font-size: 12px;
    margin-right: 12px;
    font-weight: 400;

    img {
      margin-right: 5px;
      margin-bottom: 0;
    }
  }
`;