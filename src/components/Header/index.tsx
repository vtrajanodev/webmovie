import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { HeaderStyled } from './Header.styles'

export const Header = () => {

  const { moviesSelected } = useContext(CartContext)

  return (
    <HeaderStyled>
      <Link to="/">
        <h2>Web Movies</h2>
      </Link>

      <div>
        <Link to="/cart">
          Meu carrinho
        </Link>
        <span>{moviesSelected.length} itens</span>
      </div>
    </HeaderStyled>
  )
}
