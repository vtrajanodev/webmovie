import minusIcon from '../../assets/minus-icon.png'
import plusIcon from '../../assets/plus-icon.png'
import img from '../../assets/product-cart-img.png'
import trashIcon from '../../assets/trash-icon.png'
import { CartItemContent } from './CartItem.styles'

interface CartItemProps {
  id?: number;
  title?: string;
  price?: number;
  image?: string;
}


export const CartItem = ({title, price, image} : CartItemProps) => {
  return (
    <CartItemContent>
      <td>
        <div>
          <img src={image} alt="" />
          <div>
            <h4>{title}</h4>
            <span>{price}</span>
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
        <span>R$ 29,99</span>
      </td>
      <td>
        <button><img src={trashIcon} alt="" /></button>
      </td>
    </CartItemContent>
  )
}
