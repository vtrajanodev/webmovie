import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { CartContextProvider } from './context/CartContext'
import { Home } from './pages/Home'
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
