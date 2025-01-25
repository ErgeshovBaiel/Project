import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GenreContext from './components/context/GenreContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenreContext>
      <App />
    </GenreContext>
  </StrictMode>
)
