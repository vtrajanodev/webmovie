import { useEffect, useState } from "react";
import { getMovies } from "../../api/movies-service"
import { Loading } from "../../components/Loading";
import { MovieCard } from "../../components/MovieCard";
import { MovieModel } from "../../models/movie-model";
import { HomeContainer } from "./Home.styles";


export const Home = () => {

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<MovieModel[]>([]);

  const handleAddMovieToCart = (movie: MovieModel) => {
    console.log(movie)
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
