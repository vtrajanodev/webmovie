import minusIcon from '../../assets/minus-icon.png'
import plusIcon from '../../assets/plus-icon.png'
import img from '../../assets/product-cart-img.png'
import trashIcon from '../../assets/trash-icon.png'
import { CartContainer, CartItem } from "./Cart.styles"


export const Cart = () => {
  return (
    <>
      {/* <EmptyStateCart /> */}
      <CartContainer>
        <CartItem>
          <table>
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div>
                    <img src={img} alt="" />
                    <div>
                      <h4>Homen Aranha</h4>
                      <span>R$ 29,90</span>
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
              </tr>
            </tbody>
          </table>
          <hr />
        </CartItem>
      </CartContainer>
    </>
  )
}
