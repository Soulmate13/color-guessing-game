import { HEX_CHARACTERS, THexColor } from 'constants/hexColors';
import { pickRandomArrayItem } from 'utils/randomizer/pickRandomArrayItem';

export const generateHexColor = () => {
  let color: THexColor = '#';

  for (let i = 1; i <= 6; i++) {
    color += pickRandomArrayItem<typeof HEX_CHARACTERS[number]>(HEX_CHARACTERS);
  }

  return color;
};
