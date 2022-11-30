import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Router } from './routes/Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
