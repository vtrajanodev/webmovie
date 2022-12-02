import { createContext, ReactNode, useState } from "react";
import { MovieModel } from "../models/movie-model";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextData {
  moviesSelected: MovieModel[]
  setMoviesSelected: Function,
  isMovieAtCartCheck: (id: number) => boolean;
  handleRemoveMovieFromCart: (id: number) => void;
  qtd: (id: number, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextData)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [moviesSelected, setMoviesSelected] = useState<MovieModel[]>([])

  const handleRemoveMovieFromCart = (id: number) => {
    const list = moviesSelected?.filter(movie => movie.id !== id)
    setMoviesSelected(list)
  }

  const qtd = (id: number, quantity: number) => {
    const meusFilmes = [...moviesSelected]
    const index = meusFilmes.findIndex(movie => movie.id === id)
    const filme = meusFilmes[index]
    filme.quantity = quantity
    meusFilmes[index] = filme
    setMoviesSelected([...meusFilmes])
  }

  const isMovieAtCartCheck = (id: number): boolean => {
    return moviesSelected.some(movie => movie.id === id)
  }

  return (
    <CartContext.Provider value={{ moviesSelected, setMoviesSelected, isMovieAtCartCheck, handleRemoveMovieFromCart, qtd }}>
      {children}
    </CartContext.Provider>
  )
}