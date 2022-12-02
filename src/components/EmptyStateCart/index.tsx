import { Link } from 'react-router-dom'
import img from '../../assets/empty-img.png'
import { Button } from "../Button"
import { EmptyStateCartContainer, EmptyStateCartContent } from "./EmptyStateCart.styles"

export const EmptyStateCart = () => {
  return (
    <EmptyStateCartContainer>
      <EmptyStateCartContent>
        <h1>Parece que não há nada por aqui :(</h1>
        <img src={img} alt="" />
        <Link to="/"><Button variant="primary" width="emptyCartButton" buttonText="Voltar" /></Link>
      </EmptyStateCartContent>
    </EmptyStateCartContainer>
  )
}
