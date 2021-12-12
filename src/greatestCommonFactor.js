import { smallerNum, largestNum, randomNum } from './mathematics.js';

const greatestCommonFactor = (first, second) => {
  const firstNumber = randomNum(first, second);
  const secondNum = randomNum(first, second);
  const bigger = largestNum(firstNumber, secondNum);
  const smaller = smallerNum(firstNumber, secondNum);
  let factor = 1;
  if (bigger % smaller === 0) return smaller;
  for (let i = 1; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      factor = i;
    }
  }
  return [factor, `${firstNumber} ${secondNum}`];
};

export default greatestCommonFactor;
