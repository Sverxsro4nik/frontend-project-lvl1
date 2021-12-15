import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'What is the result of the expression?';

const createProgression = (startNum, endNum) => {
  const step = randomNum(2, endNum);
  const firstNum = randomNum(startNum, endNum);
  const progressionArr = [];
  const randomIndex = randomNum(0, progressionArr.length);
  for (let i = firstNum, j = 0; j < 10; j += 1, i += step) {
    progressionArr.push(i);
  }
  const result = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  return [result, progressionArr.join(' ')];
};

const brainProgression = () => {
  gameLogic(
    rulesOfTheGame,
    createProgression,
  );
};

export default brainProgression;
