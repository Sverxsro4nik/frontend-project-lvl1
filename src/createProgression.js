import { randomNum } from './mathematics.js';

const createProgression = (startNum, endNum, stepStart, indexStart) => {
  const step = randomNum(stepStart, endNum);
  const firstNum = randomNum(startNum, endNum);
  const progressionArr = [];
  const randomIndex = randomNum(indexStart, progressionArr.length);
  for (let i = firstNum, j = 0; j < 10; j += 1, i += step) {
    progressionArr.push(i);
  }
  const result = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  return [result, progressionArr.join(' ')];
};
export default createProgression;
