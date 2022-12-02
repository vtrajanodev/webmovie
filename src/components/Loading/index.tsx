import { LoadingContainer } from './Loading.styles'
import loadingIcon from '../../assets/loading-icon.png'


export const Loading = () => {
  return (
    <LoadingContainer><img src={loadingIcon} alt="" /></LoadingContainer>
  )
}
