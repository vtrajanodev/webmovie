import { useContext } from 'react';
import cartIcon from '../../assets/cart-icon.png';
import { CartContext } from '../../context/CartContext';
import { MovieModel } from '../../models/movie-model';
import { ButtonContainer } from '../Button/Button.styles';
import { MovieCardContainer, MovieCardInfo } from "./MovieCard.styles";


type MovieCardProps = {
  movie: MovieModel,
  onAddButtonClicked: () => void;
}

export const MovieCard = ({ movie, onAddButtonClicked }: MovieCardProps) => {

  const { isMovieAtCartCheck } = useContext(CartContext)

  return (
    <MovieCardContainer>
      <MovieCardInfo>
        <img src={movie.image} alt="Imagem capa do filme" />
        <p>{movie.title}</p>
        <p> {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(movie.price)}</p>
        <ButtonContainer disabled={isMovieAtCartCheck(movie.id)} onClick={() => onAddButtonClicked()} width='homeButton' variant={!isMovieAtCartCheck(movie.id) ? 'primary' : 'secondary'}>
          <span>
            <img src={cartIcon} alt="Ícone de carrinho" />
            {isMovieAtCartCheck(movie.id) ? 1 : 0}
          </span> {!isMovieAtCartCheck(movie.id) ? "ADICIONAR AO CARRINHO" : "ITEM ADICIONADO"}
        </ButtonContainer>
      </MovieCardInfo>
    </MovieCardContainer>
  )
}
