import React from 'react'
import { useNavigate } from 'react-router-dom';

const Inicio = () => {

    const navigate = useNavigate();

    const handlerStart = ()=>{
        navigate('/quiz')
    }

  return (
    <div className="nes-container is-dark">
        <h1 className="nes-text is-error">
        Feliz
        </h1>
        <h1 className="nes-text is-error">
        Navidad
        </h1>
        <p>
            Soy tu amigo invisible y te desafio a descubrime...
        </p>
        <button className="nes-btn is-warning" onClick={handlerStart}>
            Empezamos?
        </button>
    </div>
  )
}

export default Inicio