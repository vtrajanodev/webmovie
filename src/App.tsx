import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
