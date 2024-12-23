import soundIcon from './assets/images/sound.png'
import { useWindowSize } from 'react-use'
import { useState } from 'react'
import Snowfall from 'react-snowfall'
import SantaAnimation from './components/SantaAnimation/SantaAnimation'
import jingleBells from './assets/sounds/jingle-bells.mp3'
import './App.css'

const App = ({children})=> {
  const { width, height } = useWindowSize()
  const [audioPlayed, setAudioPlayed] = useState(false);

  // Función para manejar la interacción del usuario y reproducir el audio
  const handleAudio = () => {
    if (!audioPlayed) {
      setAudioPlayed(true);

    }else{
      setAudioPlayed(false);
    }
  };

  return (
    <>
        {/* Solo reproduce el audio cuando audioPlayed es true */}
        {audioPlayed && (
          <audio autoPlay loop>
            <source src={jingleBells} type="audio/mp3" />
            Tu navegador no soporta el formato de audio.
          </audio>
        )}
      <button className={`sound-control nes-btn ${audioPlayed ? 'is-success':'is-error'}`} onClick={handleAudio}>
        <img src={soundIcon}></img>
      </button>
      <Snowfall
        style={{ position: 'absolute', top: 0 }}
        snowflakeCount={150}
        speed={[0.5, 2]}
        rotationSpeed={[-1,1.5]}
        wind={[-1, 2]}
        width={width}
        height={height}
      />
      <SantaAnimation/>
      {children}
    </>
  )
}

export default App
