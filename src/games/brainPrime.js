import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Проверка числа на простоту
const isPrime = (firstParam, secondParam) => {
  const needNum = randomNum(firstParam, secondParam);
  if (needNum === 2 || needNum === 1) return ['yes', needNum];
  if (needNum % 2 === 0) return ['no', needNum];
  for (let i = 3; i < needNum; i += 1) {
    if (needNum % i === 0) {
      return ['no', needNum];
    }
  }
  return ['yes', needNum];
};

const brainPrime = () => {
  gameLogic(
    rulesOfTheGame,
    isPrime,
  );
};

export default brainPrime;
