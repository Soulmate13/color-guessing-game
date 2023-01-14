import { Reducer } from 'react';
import { THexColor } from 'constants/hexColors';
import { generateHexColorQuiz, THexQuiz } from 'utils/colors/generateHexColorQuiz';

export type TGameStage = 'guessing' | 'correct' | 'wrong';

export type TGameState = {
  quiz: THexQuiz;
  state: TGameStage;
}

export type TActions = { type: 'GUESS', payload: THexColor; } | { type: 'GET_NEXT_QUESTION' };

export const ColorsReducer: Reducer<TGameState, TActions> = (state, action) => {
  switch (action.type) {
    case 'GUESS': {
      if (action.payload === state.quiz.__correctAnswer)
        return {
          quiz: state.quiz,
          state: 'correct'
        };
      else {
        return {
          quiz: state.quiz,
          state: 'wrong'
        };
      }
    }

    case 'GET_NEXT_QUESTION': {
      return {
        quiz: generateHexColorQuiz(),
        state: 'guessing'
      };
    }

    default: {
      return { ...state };
    }
  }
};
