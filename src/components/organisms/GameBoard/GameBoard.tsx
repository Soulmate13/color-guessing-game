import { useReducer } from 'react';
import { generateHexColorQuiz } from 'utils/colors/generateHexColorQuiz';
import Canvas from 'components/atoms/Canvas';
import Navigation from 'components/organisms/Navigation';
import { ColorsReducer, TGameState } from 'reducers/ColorsReducer';

const initialState: TGameState = { quiz: generateHexColorQuiz(), state: 'guessing' };

const GameBoard = () => {
  const [state, dispatch] = useReducer(ColorsReducer, initialState);

  return (
    <section className="game-board">
      <Canvas
        color={state.quiz.__correctAnswer}
        state={state.state}
      />
      <Navigation
        state={state.state}
        question={state.quiz.question}
        dispatch={dispatch}
      />
    </section>
  );
};

export default GameBoard;
