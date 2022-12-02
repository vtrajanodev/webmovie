import { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../../assets/header-icon.png'
import { CartContext } from '../../context/CartContext'
import { HeaderStyled } from './Header.styles'

export const Header = () => {

  const { moviesSelected } = useContext(CartContext)

  return (
    <HeaderStyled>
      <Link to="/">
        <h2>WeMovies</h2>
      </Link>

      <div>
        <div className='flex-column'>
          <Link to="/cart">
            Meu carrinho
          </Link>
          <span>{moviesSelected.length} itens</span>
        </div>
        <div>
          <span>
            <img src={cartIcon} alt="Cart icon image" />
          </span>
        </div>
      </div>

    </HeaderStyled>
  )
}
