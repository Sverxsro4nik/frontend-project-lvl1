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

const formaionOfResponce = (startNum, endNum) => {
  const bigger = Math.max(randomNum(startNum, endNum), randomNum(startNum, endNum));
  const smaller = Math.min(randomNum(startNum, endNum), randomNum(startNum, endNum));
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
