import { gameLogic } from '../index.js';
import { largestNum, randomNum, smallerNum } from '../mathematics.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

const greatestCommonFactor = (first, second) => {
  const bigger = largestNum(randomNum(first, second), randomNum(first, second));
  const smaller = smallerNum(randomNum(first, second), randomNum(first, second));
  const answer = `${smaller} ${bigger}`;
  let factor = 1;
  if (bigger % smaller === 0) return [smaller, answer];
  for (let i = 1; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      factor = i;
    }
  }
  return [factor, answer];
};

const brainGcd = () => {
  gameLogic(
    rulesOfTheGame,
    greatestCommonFactor,
  );
};
export default brainGcd;
