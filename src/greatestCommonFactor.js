import { smallerNum, largestNum } from './mathematics.js';

const greatestCommonFactor = (first, second) => {
  const bigger = largestNum(first, second);
  const smaller = smallerNum(first, second);
  let factor = 1;
  if (bigger % smaller === 0) return smaller;
  for (let i = 1; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      factor = i;
    }
  }
  return factor;
};

export default greatestCommonFactor;
