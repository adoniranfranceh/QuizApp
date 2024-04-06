import { createContext } from "react";

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const value = { value: 'Quiz App'};

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
