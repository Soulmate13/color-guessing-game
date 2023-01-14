import { THexColor } from 'constants/hexColors';
import { shuffleArray } from 'utils/randomizer/shuffleArray';
import { generateHexColor } from './generateHexColor';
export type TQuestion = [THexColor, THexColor, THexColor]

export type THexQuiz = {question : TQuestion, __correctAnswer: THexColor};

export const generateHexColorQuiz = (): THexQuiz => {
  const __correctAnswer: THexColor = generateHexColor();

  const otherAnswers: [THexColor, THexColor] = [
    generateHexColor(),
    generateHexColor()
  ];

  const colors: TQuestion = [__correctAnswer, ...otherAnswers];

  return {
    question: shuffleArray<TQuestion>(colors),
    __correctAnswer
  };
};
