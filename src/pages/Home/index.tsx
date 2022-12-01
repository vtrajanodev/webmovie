import { useContext, useEffect, useState } from "react";
import { getMovies } from "../../api/movies-service";
import { Loading } from "../../components/Loading";
import { MovieCard } from "../../components/MovieCard";
import { CartContext } from "../../context/CartContext";
import { MovieModel } from "../../models/movie-model";
import { HomeContainer } from "./Home.styles";


export const Home = () => {

  const { moviesSelected, setMoviesSelected } = useContext(CartContext)

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<MovieModel[]>([]);

  const handleAddMovieToCart = (movie: MovieModel) => {
    setMoviesSelected([...moviesSelected, movie])
    console.log(moviesSelected)
  }

  const fetchData = async () => {
    try {
      const data = await getMovies()
      setMovies(data)
    } catch {
      alert('erro')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (

    <HomeContainer>
      {loading ? <Loading /> :
        movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} onAddButtonClicked={() => handleAddMovieToCart(movie)} />
        ))
      }
    </HomeContainer>
  )
}
