import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const greatestCommonFactor = (first, second) => {
  const bigger = Math.max(randomNum(first, second), randomNum(first, second));
  const smaller = Math.min(randomNum(first, second), randomNum(first, second));
  const answer = `${smaller} ${bigger}`;
  let factor = 1;
  if (bigger % smaller === 0) return [smaller.toString(), answer];
  for (let i = 1; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      factor = i;
    }
  }
  return [factor.toString(), answer];
};

const brainGcd = () => {
  gameLogic(
    rulesOfTheGame,
    greatestCommonFactor,
  );
};
export default brainGcd;
