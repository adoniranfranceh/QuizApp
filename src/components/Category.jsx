import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import CategoryImg from '../img/category.svg';

import './Category.css'

const Category = () => {
  const [quizStage, dispath] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispath({ type: 'START_GAME', payload: category });

    dispath({ type: 'REORDER_QUESTIONS' });
  }

  return (
    <div id="category">
      <h2>Selecione uma categoria</h2>
      <p>As perguntas serão referentes a uma dos temas abaixo:</p>

      {quizStage.questions.map((question) => (
        <button 
          onClick={ () => chooseCategoryAndReorderQuestions(question.category) }
          key={question.category}
        >
          {question.category}
        </button>

      ))}

      <img src={CategoryImg} alt="Categoria do Quiz" />
    </div>
  )
};

export default Category;
