import { createContext, ReactNode, useState } from "react";
import { MovieModel } from "../models/movie-model";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextData{
  moviesSelected: MovieModel[]
  setMoviesSelected: Function,
  isMovieAtCartCheck: (id: number) => boolean;
}

export const CartContext = createContext({} as CartContextData)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [moviesSelected, setMoviesSelected] = useState<MovieModel[]>([]) 

  const isMovieAtCartCheck = (id: number): boolean => {
    const  isMovieSelectedAtCart = moviesSelected.some(movie => movie.id === id)
    return isMovieSelectedAtCart;
  }

  return (
    <CartContext.Provider value={{moviesSelected, setMoviesSelected, isMovieAtCartCheck }}>
      {children}
    </CartContext.Provider>
  )
}