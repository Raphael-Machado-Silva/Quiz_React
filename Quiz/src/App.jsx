import Welcome from './components/Welcome'
import { QuizContext } from './context/quiz'
import { useContext, useEffect } from 'react'
import Question from './components/Question'
import GameOver from './components/GameOver'

import './App.css'

function App() {
  const [quizState, dispatch ] = useContext(QuizContext)
  
  useEffect(()=>{
    //embaralhar as perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState.gameStage === "Start" && <Welcome></Welcome>}
      {quizState.gameStage === "Playing" && <Question></Question>}
      {quizState.gameStage === "End" && <GameOver></GameOver>}
    </div>
  )
}

export default App
