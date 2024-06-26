import {useContext} from "react";
import { QuizContext } from "../context/quiz";

import './Option.css';

const Options = ({ option, answer, selectOption, hide }) => {
  const [quizStage, dispath] = useContext(QuizContext);

  return (
    <div
      className={`
      option
      ${quizStage.answerSelected && option === answer ? 'correct' : ''}
       ${quizStage.answerSelected && option !== answer ? 'wrong' : ''}
       ${hide ? "hide" : ""}
       `}
      onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
};

export default Options;
