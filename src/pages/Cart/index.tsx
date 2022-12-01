import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from '../../components/Button/Button.styles'
import { CartItem } from '../../components/CartItem'
import { EmptyStateCart } from '../../components/EmptyStateCart'
import { CartContext } from '../../context/CartContext'
import { CartContainer, FooterCartContainer } from "./Cart.styles"


export const Cart = () => {

  const { moviesSelected } = useContext(CartContext)
  console.log(moviesSelected)

  return (
    <>
      {moviesSelected?.length === 0 ? <EmptyStateCart /> :
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
              {
                moviesSelected?.map(movieSelected => (
                  <CartItem key={movieSelected.id} id={movieSelected.id} title={movieSelected.title} price={movieSelected.price} image={movieSelected.image} />
                ))
              }
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
      }


    </>
  )
}
