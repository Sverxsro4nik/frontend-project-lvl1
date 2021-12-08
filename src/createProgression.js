import randomNum from './randomNum.js';

const createProgression = () => {
  const step = randomNum(2, 10);
  const firstNum = randomNum(1, 25);
  const progressionArr = [];
  const randomIndex = randomNum(3, progressionArr.length);
  console.log(randomIndex);
  for (let i = firstNum, j = 0; j < 10; j += 1, i += step) {
    progressionArr.push(i);
  }
  const hiddenNumber = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  return [hiddenNumber, progressionArr.join(' ')];
};
export default createProgression;
