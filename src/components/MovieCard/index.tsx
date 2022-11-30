import img from '../../assets/viuva-negra.svg'
import { Button } from "../Button"
import { MovieCardContainer, MovieCardInfo } from "./MovieCard.styles"

export const MovieCard = () => {
  return (
    <MovieCardContainer>
      <MovieCardInfo>
        <img src={img} alt="" />
        <p>Viuva Negra</p>
        <p>R$ 9,99</p>
        <Button buttonText="Adicionar ao Carrinho" />
      </MovieCardInfo>
    </MovieCardContainer>
  )
}
