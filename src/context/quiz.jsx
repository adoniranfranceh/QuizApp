import { createContext, useReducer } from "react";

import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialStage = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
};

const quizReducer = (stage, action) => {
  console.log(stage, action);

  switch(action.type) {
    case 'CHANGE_STAGE':
      return {
        ...stage,
        gameStage: STAGES[1],
      };

    case 'REORDER_QUESTIONS':
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...stage,
        questions: reorderedQuestions,
      };

    case 'CHANGE_QUESTION':
      const nextQuestion = stage.currentQuestion + 1;
      let endGame = false

      if(!questions[nextQuestion]){
        endGame = true;
      }

      return {
        ...stage,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : stage.gameStage,
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
