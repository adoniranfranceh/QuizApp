import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from '../img/welldone.svg';

import './GameOver.css';

const GameOver = () => {
  const [quizStage, dispath] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizStage.score}</p>
      <p>Você acertou {quizStage.score} de {quizStage.questions.length} perguntas.</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={ () => dispath({ type: 'NEW_GAME' })}>Reiniciar</button>
    </div>
  )
}

export default GameOver
