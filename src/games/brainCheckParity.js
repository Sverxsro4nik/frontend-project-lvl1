import { gameLogic } from '../index.js';
import { randomNum } from '../mathematics.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка числа на четность
const isEven = (start, end) => {
  const number = randomNum(start, end);
  return [number % 2 === 0 ? 'yes' : 'no', `${number}`];
};

const brainCheckParity = () => {
  gameLogic(rulesOfTheGame, isEven);
};

export default brainCheckParity;
