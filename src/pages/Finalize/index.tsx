import { Link } from 'react-router-dom'
import img from '../../assets/finalize-img.png'
import { Button } from "../../components/Button"
import { FinalizePageContainer, FinalizePageContent } from "./Finalize.styles"

export const Finalize = () => {
  return (
    <FinalizePageContainer>
      <FinalizePageContent>
        <h1>Compra realizada com sucesso</h1>
        <img src={img} alt="" />
        <Link to="/"><Button width="emptyCartButton" buttonText="Voltar" /></Link>
      </FinalizePageContent>
    </FinalizePageContainer>
  )
}
