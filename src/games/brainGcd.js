import { gameLogic } from '../index.js';
import { largestNum, randomNum, smallerNum } from '../mathematics.js';

const greatestCommonFactor = (first, second) => {
  const bigger = largestNum(randomNum(first, second), randomNum(first, second));
  const smaller = smallerNum(randomNum(first, second), randomNum(first, second));
  const answer = `${smaller} ${bigger}`;
  console.log(answer);
  let factor = 1;
  if (bigger % smaller === 0) return smaller;
  for (let i = 1; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      factor = i;
    }
  }
  return [factor, answer];
};

const brainGcd = () => {
  gameLogic(
    'Find the greatest common divisor of given numbers.',
    greatestCommonFactor,
  );
};
export default brainGcd;
