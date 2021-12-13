import { gameLogic } from '../index.js';
import { randomNum } from '../mathematics.js';

// Проверка числа на четность
const isEven = (start, end) => {
  const number = randomNum(start, end);
  return [number % 2 === 0 ? 'yes' : 'no', `${number}`];
};

const brainCheckParity = () => {
  gameLogic(
    'Answer "yes" if the number is even, otherwise answer "no".',
    isEven,
  );
};

export default brainCheckParity;
