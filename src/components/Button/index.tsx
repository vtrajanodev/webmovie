import { ButtonContainer, ButtonVariant, ButtonWidth } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant,
  width?: ButtonWidth,
  buttonText?: string;
}

export const Button = ({ variant = 'primary', width = 'homeButton', buttonText } : ButtonProps) => {
  return (
    <ButtonContainer width={width} variant={variant}>{buttonText}</ButtonContainer>
  )
}
