import { HeaderStyled } from "./Header.styles"

export const Header = () => {
  return (
    <HeaderStyled>
      <h2>Web Movies</h2>

      <div>
        <p>Meu carrinho</p>
        <span>0 itens</span>
      </div>
    </HeaderStyled>
  )
}
