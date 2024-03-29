import launchesGame from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка числа на четность
const isEven = (number) => number % 2 === 0;

const formaionOfResponce = () => {
  const minValue = 1;
  const maxValue = 25;
  const number = randomNum(minValue, maxValue);
  return isEven(number) ? ['yes', number] : ['no', number];
};

const brainCheckParity = () => {
  launchesGame(rulesOfTheGame, formaionOfResponce);
};

export default brainCheckParity;
