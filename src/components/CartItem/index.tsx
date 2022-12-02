import { useContext } from 'react';
import minusIcon from '../../assets/minus-icon.png';
import plusIcon from '../../assets/plus-icon.png';
import trashIcon from '../../assets/trash-icon.png';
import { CartContext } from '../../context/CartContext';
import { CartItemContent } from './CartItem.styles';

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const CartItem = ({ id, title, price, image }: CartItemProps) => {

  const { handleRemoveMovieFromCart } = useContext(CartContext)

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
          <button><img src={minusIcon} alt="" /></button>
          <input type="text" value={1} />
          <button><img src={plusIcon} alt="" /></button>
        </div>
      </td>
      <td>
        <span>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price)}</span>
      </td>
      <td>
        <button onClick={() => handleRemoveMovieFromCart(id)}>
          <img src={trashIcon} alt="" />
        </button>
      </td>
    </CartItemContent>
  )
}
