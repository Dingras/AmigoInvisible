import { useWindowSize } from 'react-use'
import Snowfall from 'react-snowfall'
import SantaAnimation from './components/SantaAnimation/SantaAnimation'

const App = ({children})=> {
  const { width, height } = useWindowSize()

  return (
    <>
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
