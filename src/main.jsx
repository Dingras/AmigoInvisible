import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "nes.css/css/nes.min.css";
import Quiz from './components/Quiz/Quiz.jsx'
import WhoAmI from './components/WhoIAm/WhoAmI.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import Congrats from './components/Congrats/Congrats.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/whoami' element={<WhoAmI/>} />
          <Route path='/congrats' element={<Congrats/>} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
)
