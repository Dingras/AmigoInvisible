import React, { useRef, useState, useEffect } from 'react';
import './Congrats.css';
import celebrationImg from '../../assets/images/celebration_img.png';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import Swal from 'sweetalert2';

const Congrats = () => {
    const navigator = useNavigate();
    const cardRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handlerBack = () => {
        navigator('/');
    };

    const handlerImage = () => {
        Swal.fire({
            title: 'Feliz navidad Juli🎄',
            imageUrl: 'https://github.com/Dingras/AmigoInvisible/blob/main/src/assets/images/celebration_img.png?raw=true',
            background: '#212529',
            customClass: {
                title: 'nes-text is-error',
                confirmButton: 'nes-btn is-warning',
                image: 'congrats-gif',
                popup: 'nes-container is-dark',
            }
        });
    }

    useEffect(() => {
        const cardElement = cardRef.current;
        if (!cardElement) return;

        const resizeObserver = new ResizeObserver(() => {
            const { offsetWidth, offsetHeight } = cardElement;
            setDimensions({ width: offsetWidth, height: offsetHeight });
        });

        resizeObserver.observe(cardElement);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="container-congrats">
            <div className="nes-container is-dark congrats-card" ref={cardRef}>
                <Confetti 
                    width={dimensions.width} 
                    height={dimensions.height}
                    numberOfPieces={70}
                    wind={0}
                />
                <h2 className="nes-text is-warning">¡Felicidades!</h2>
                <div className="congrats-gif-container">
                    <img src={celebrationImg} alt="Celebration" className="congrats-gif" onClick={handlerImage}/>
                </div>
                <p className="congrats-text">🎉¡Me descubriste!🎉</p>
            </div>
            <br />
            <button className="nes-btn is-warning" onClick={handlerBack}>
                Regresar
            </button>
        </div>
    );
};

export default Congrats;


