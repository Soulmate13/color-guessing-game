import { THexColor } from 'constants/hexColors';
import { TGameStage } from 'reducers/ColorsReducer';

interface IProps {
  color: THexColor;
  state: TGameStage;
}

const Canvas = ({ color, state }: IProps) => {
  return (
    <div className="canvas" style={{ backgroundColor: color }}>
      {state === 'correct' && <span className="answer">Correct! {color}</span>}
      {state === 'wrong' && <span className="answer">Wrong!</span>}
    </div>
  );
};

export default Canvas;
