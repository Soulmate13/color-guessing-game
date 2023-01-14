import { Dispatch } from 'react';
import { TQuestion } from 'utils/colors/generateHexColorQuiz';
import Button from 'components/atoms/Button';
import { TActions, TGameStage } from 'reducers/ColorsReducer';

interface IProps {
  question: TQuestion;
  state: TGameStage;
  dispatch: Dispatch<TActions>;
}

const Navigation = ({ question, state, dispatch }: IProps) => {
  const answerButtons = state !== 'correct' ? <div className="quiz-buttons-container">
    {question.map((answer) => {
      const guessColor = () => dispatch({ type: 'GUESS', payload: answer });

      return (
        <Button
          onClick={guessColor}
          key={answer}
        >
          {answer}
        </Button>
      );
    })}
  </div> : null;

  const getNextQuestion = () => dispatch({ type: 'GET_NEXT_QUESTION' });

  if (state !== 'correct') return answerButtons;

  if (state === 'correct') return (
    <Button onClick={getNextQuestion}>
      Next question
    </Button>
  );

  return null;
};

export default Navigation;
