import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка числа на четность
const isEven = (start, end) => {
  const number = randomNum(start, end);
  return [number % 2 === 0, number];
};

const checkTheAnswer = (start, end) => {
  const [result, number] = isEven(start, end);
  if (result) return ['yes', `${number}`];
  return ['no', `${number}`];
};

const brainCheckParity = () => {
  gameLogic(rulesOfTheGame, checkTheAnswer);
};

export default brainCheckParity;
