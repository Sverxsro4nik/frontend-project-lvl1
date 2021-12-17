import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const greatestCommonFactor = (smaller, bigger) => {
  let factor = 1;
  if (bigger % smaller === 0) return smaller;
  for (let i = 1; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      factor = i;
    }
  }
  return factor;
};

const formaionOfResponce = () => {
  const minValue = 1;
  const maxValue = 25;
  const bigger = Math.max(randomNum(minValue, maxValue), randomNum(minValue, maxValue));
  const smaller = Math.min(randomNum(minValue, maxValue), randomNum(minValue, maxValue));
  const answer = `${smaller} ${bigger}`;
  const factor = greatestCommonFactor(smaller, bigger);
  return [factor.toString(), answer];
};

const brainGcd = () => {
  gameLogic(
    rulesOfTheGame,
    formaionOfResponce,
  );
};
export default brainGcd;
