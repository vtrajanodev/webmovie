import { createContext, ReactNode, useState } from "react";
import { MovieModel } from "../models/movie-model";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextData{
  moviesSelected: MovieModel[] | undefined;
  setMoviesSelected: Function
}

export const CartContext = createContext({} as CartContextData)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [moviesSelected, setMoviesSelected] = useState<MovieModel[]>([])

  return (
    <CartContext.Provider value={{moviesSelected, setMoviesSelected}}>
      {children}
    </CartContext.Provider>
  )
}