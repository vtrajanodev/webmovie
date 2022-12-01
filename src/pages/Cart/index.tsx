import { Link } from 'react-router-dom'
import { ButtonContainer } from '../../components/Button/Button.styles'
import { CartItem } from '../../components/CartItem'
import { CartContainer, FooterCartContainer } from "./Cart.styles"


export const Cart = () => {
  return (
    <>
      {/* <EmptyStateCart /> */}
      <CartContainer>
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
            <CartItem />
          </tbody>
        </table>
        <hr />
        <FooterCartContainer>
          <Link to="/finalize">
            <ButtonContainer width='finalizeButton' variant='primary'>
              Finalizar pedido
            </ButtonContainer>
          </Link>
          <div>
            <span>TOTAL</span>
            <span>R$ 29,90</span>
          </div>
        </FooterCartContainer>
      </CartContainer>
    </>
  )
}
