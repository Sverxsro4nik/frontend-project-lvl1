import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка числа на четность
const isEven = (number) => number % 2 === 0;

const formaionOfResponce = (start, end) => {
  const number = randomNum(start, end);
  const result = isEven(number);
  return result ? ['yes', number] : ['no', number];
};

const brainCheckParity = () => {
  gameLogic(rulesOfTheGame, formaionOfResponce);
};

export default brainCheckParity;
