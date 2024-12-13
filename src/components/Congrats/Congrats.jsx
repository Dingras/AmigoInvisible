import React from 'react';
import './Congrats.css'
import celebrationGif from '../../assets/images/celebration.gif';
import { useNavigate } from 'react-router-dom';

const Congrats = () => {
    const navigator = useNavigate()

    const handlerBack = ()=>{
        navigator('/')
    }
  return (
    <div className='container-congrats'>
        <div className="nes-container is-dark congrats-card">
        <h2 className="nes-text is-warning">¡Felicidades!</h2>
        <div className="congrats-gif-container">
            <img src={celebrationGif} alt="Celebration" className="congrats-gif" />
        </div>
        <p className="congrats-text">🎉🎉¡Me descubriste!🎉🎉</p>
        </div>
        <br />
        <button className='nes-btn is-warning' onClick={handlerBack}>
            Regregar
        </button>
    </div>
  );
};

export default Congrats;
