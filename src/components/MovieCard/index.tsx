import { MovieModel } from '../../models/movie-model';
import { ButtonContainer } from '../Button/Button.styles';
import { MovieCardContainer, MovieCardInfo } from "./MovieCard.styles";


type MovieCardProps = {
  movie: MovieModel,
  onAddButtonClicked: () => void;
}

export const MovieCard = ({ movie, onAddButtonClicked }: MovieCardProps) => {

  return (
    <MovieCardContainer>
      <MovieCardInfo>
        <img src={movie.image} alt="" />
        <p>{movie.title}</p>
        <p> {Intl.NumberFormat('pt-BR', {currency: 'BRL'}).format(movie.price)}</p>
        <ButtonContainer onClick={() => onAddButtonClicked()} width='homeButton' variant='primary'>
          Adicionar ao carrinho
        </ButtonContainer>
      </MovieCardInfo>
    </MovieCardContainer>
  )
}
