import React, { useRef, useState, useEffect } from 'react';
import './Congrats.css';
import celebrationGif from '../../assets/images/celebration.gif';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const Congrats = () => {
    const navigator = useNavigate();
    const cardRef = useRef(null); // Referencia al contenedor
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handlerBack = () => {
        navigator('/');
    };

    useEffect(() => {
        const updateDimensions = () => {
            if (cardRef.current) {
                const { offsetWidth, offsetHeight } = cardRef.current;
                setDimensions({ width: offsetWidth, height: offsetHeight });
            }
        };

        updateDimensions();

        // Escucha cambios en el tamaño de la ventana
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className="container-congrats">
            <div className="nes-container is-dark congrats-card" ref={cardRef}>
                <Confetti 
                    width={dimensions.width} 
                    height={dimensions.height}
                    numberOfPieces={70}
                    wind={0.01}
                />
                <h2 className="nes-text is-warning">¡Felicidades!</h2>
                <div className="congrats-gif-container">
                    <img src={celebrationGif} alt="Celebration" className="congrats-gif" />
                </div>
                <p className="congrats-text">🎉🎉¡Me descubriste!🎉🎉</p>
            </div>
            <br />
            <button className="nes-btn is-warning" onClick={handlerBack}>
                Regresar
            </button>
        </div>
    );
};

export default Congrats;

