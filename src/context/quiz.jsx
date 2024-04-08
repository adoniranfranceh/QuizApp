import { createContext, useReducer } from "react";

import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialStage = {
  gameStage: STAGES[0],
  questions,
};

const quizReducer = (stage, action) => {
  console.log(stage, action);

  switch(action.type) {
    case 'CHANGE_STAGE':
      return {
        stage,
        gameStage: STAGES[1],
      };
    default:
      return stage;
  }
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialStage);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
