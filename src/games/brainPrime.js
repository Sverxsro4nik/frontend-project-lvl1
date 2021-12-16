import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Проверка числа на простоту
const isPrime = (number) => {
  if (number === 2 || number === 1) return true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const formaionOfResponce = (start, end) => {
  const number = randomNum(start, end);
  const result = isPrime(number);
  return result ? ['yes', number] : ['no', number];
};

const brainPrime = () => {
  gameLogic(
    rulesOfTheGame,
    formaionOfResponce,
  );
};

export default brainPrime;
