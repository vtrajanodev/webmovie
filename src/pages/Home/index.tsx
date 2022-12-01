import { useEffect, useState } from "react";
import { getMovies } from "../../api/mock/movies-service";
import { MovieCard } from "../../components/MovieCard";
import { MovieModel } from "../../models/movie-model";
import { HomeContainer } from "./Home.styles";


export const Home = () => {

  const [movies, setMovies] = useState<MovieModel[]>([]);

  const handleAddMovieToCart = (movie: MovieModel) => {
    console.log(movie)
  }

  const fetchData = async () => {
    try {
      const movies = await getMovies()
      setMovies(movies.products)
    } catch {
      alert('erro')
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (

    <HomeContainer>
      {
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onAddButtonClicked={() => handleAddMovieToCart(movie)} />
        ))
      }
    </HomeContainer>
  )
}
