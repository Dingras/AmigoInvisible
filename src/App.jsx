import { useWindowSize } from 'react-use'
import Snowfall from 'react-snowfall'
import Quiz from './components/Quiz/Quiz'
import WhoAmI from './components/WhoIAm/WhoAmI'

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
      {children}
    </>
  )
}

export default App
