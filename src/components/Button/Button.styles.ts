import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonWidth = 'homeButton' | 'emptyCartButton' | 'finalizeButton'

interface ButtonContainerProps {
  variant: ButtonVariant
  width: ButtonWidth,
}

const buttonVariants = {
  primary: '#009EDD',
  secondary: '#039B00',
}

const buttonWidhts = {
  homeButton: '280px',
  emptyCartButton: '180px',
  finalizeButton: '235px',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  border-radius: 0.2rem;
  color: #2F2E41;
  font-weight: 700;
  border: none;
  color: #FFF;

  ${({ variant, width }) => {
    return css`
      background-color: ${buttonVariants[variant]};
      width: ${buttonWidhts[width]};
      cursor: ${variant === 'primary' ? 'pointer' : 'not-allowed'}
    `
  }}
`
