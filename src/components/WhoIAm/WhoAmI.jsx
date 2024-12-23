import React, { useState } from 'react'
import './WhoAmI.css'
import { useNavigate } from 'react-router-dom'
import Error from '../Error/Error'
import correctSoundFile from '../../assets/alerts/correct.mp3'
import wrongSoundFile from '../../assets/alerts/error.mp3'

const WhoAmI = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [help, setHelp] = useState(false)
  const [correct, setCorrect] = useState(false)
  const navigate = useNavigate()

  const correctAnswer = 'Fernando' // La respuesta correcta
  const helpMessage = '¡Vamos! Vos podes, no es tan difícil.' // Mensaje de ayuda

  const correctSound = new Audio(correctSoundFile)
  const wrongSound = new Audio(wrongSoundFile)

  const handleSubmit = () => {
    if (inputValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      correctSound.play() // Reproducir sonido correcto
      setCorrect(true)
      setHelp(false)
      setTimeout(() => {
        setCorrect(false)
        navigate('/congrats') // Redirigir a otra página
      }, 1000); // Esperar 1 segundo antes de redirigir
    } else {
      wrongSound.play() // Reproducir sonido incorrecto
      setInputValue('') // Borrar el texto ingresado
      setError(true) // Mostrar error momentáneamente
      setHelp(true) // Mostrar ayuda
      setTimeout(() => setError(false), 1000) // Ocultar el error después de 1 segundo
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <>
      {help && <Error message={helpMessage} />}
      <div className="nes-container is-dark">
        <p>¿Quién soy?</p>
        <input
          type="text"
          className={`nes-input ${error ? 'is-error' : ''} ${correct ? 'is-success' : ''}`}
          placeholder="Escribe mi nombre aquí..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          
          />
        <button className="nes-btn is-primary" onClick={handleSubmit}>
          Confirmar
        </button>
      </div>
    </>
  );
};

export default WhoAmI;
