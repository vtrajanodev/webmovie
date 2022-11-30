import { Link } from 'react-router-dom'
import { HeaderStyled } from './Header.styles'

export const Header = () => {
  return (
    <HeaderStyled>
      <h2>Web Movies</h2>

      <div>
        <Link to="/cart">
          Meu carrinho
        </Link>
        <span>0 itens</span>
      </div>
    </HeaderStyled>
  )
}
