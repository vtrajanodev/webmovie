import { useContext, useState } from 'react';
import minusIcon from '../../assets/minus-icon.png';
import plusIcon from '../../assets/plus-icon.png';
import trashIcon from '../../assets/trash-icon.png';
import { CartContext } from '../../context/CartContext';
import { CartItemContent } from './CartItem.styles';

interface CartItemProps {
  id?: number;
  title?: string;
  price: number;
  image?: string;
}

export const CartItem = ({ id, title, price, image }: CartItemProps) => {

  const { moviesSelected, setMoviesSelected, quantity, setQuantity } = useContext(CartContext)

  const handleRemoveMovieFromCart = () => {
    const list = moviesSelected?.filter(movie => movie.id !== id)
    console.log(moviesSelected)
    setMoviesSelected(list)
  }

  return (
    <CartItemContent>
      <td>
        <div>
          <img src={image} alt="" />
          <div>
            <h4>{title}</h4>
            <span>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price)}</span>
          </div>
        </div>
      </td>
      <td>
        <div>
          <button onClick={() => setQuantity(quantity - 1)}><img src={minusIcon} alt="" /></button>
          <input type="text" value={quantity} />
          <button onClick={() => setQuantity(quantity + 1)}><img src={plusIcon} alt="" /></button>
        </div>
      </td>
      <td>
        <span>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price * quantity)}</span>
      </td>
      <td>
        <button onClick={() => handleRemoveMovieFromCart()}>
          <img src={trashIcon} alt="" />
        </button>
      </td>
    </CartItemContent>
  )
}
