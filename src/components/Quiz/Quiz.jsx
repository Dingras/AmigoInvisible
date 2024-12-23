import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección
import './Quiz.css';
import correctSound from '../../assets/alerts/correct.mp3'; // Archivo de sonido correcto
import wrongSound from '../../assets/alerts/error.mp3'; // Archivo de sonido incorrecto
import questions from '../../data/quiz.json';
import Error from '../Error/Error';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice de la pregunta actual
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Respuesta seleccionada
  const [answerStatus, setAnswerStatus] = useState(null); // Estado de la respuesta (is-success o is-error)
  const [error, setError] = useState(false); // Mostrar error
  const navigate = useNavigate(); // Redirección

  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleAnswerClick = (answer) => {

    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
      playSound(correctSound); // Reproducir sonido correcto
      setAnswerStatus('is-success'); // Respuesta correcta
      setError(false); // Ocultar mensaje de error si lo hay
      setSelectedAnswer(answer); // Actualizar la respuesta seleccionada
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1); // Avanzar a la siguiente pregunta
        } else {
          navigate('/whoami'); // Redirigir al finalizar todas las preguntas
        }
        setSelectedAnswer(null); // Restablecer la respuesta seleccionada
        setAnswerStatus(null); // Restablecer el estado de respuesta
      }, 1000);
    } else {
      playSound(wrongSound); // Reproducir sonido incorrecto
      setAnswerStatus('is-error'); // Respuesta incorrecta
      setSelectedAnswer(answer); // Actualizar la respuesta seleccionada
      setError(true); // Mostrar mensaje de error
      setTimeout(() => {
        setAnswerStatus(null); // Quitar el estado de error después de un tiempo
      }, 1000);
    }
  };

  const currentQuestion = questions[currentQuestionIndex]; // Obtener la pregunta actual

  return (
    <>
      {error && <Error message={currentQuestion.help} />}
      <div className="nes-container is-dark">
        <p>{currentQuestion.question}</p>
        <br />
          {currentQuestion.answers.map((answer, index) => (
            <button
            key={index}
            className={`nes-btn ${selectedAnswer === answer && answerStatus ? answerStatus : ''}`}
            onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </button>
          ))}
        <br />
        <progress className="nes-progress is-warning" value={currentQuestionIndex+1} max={questions.length+1}></progress>
      </div>
    </>
  );
};

export default Quiz;

