import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'What is the result of the expression?';

const createProgression = (startNum, endNum) => {
  const step = randomNum(2, endNum);
  const firstNum = randomNum(startNum, endNum);
  const progressionArr = [];
  const randomIndex = randomNum(3, progressionArr.length);
  const maxNumbersInProgression = 10;
  for (let numInProgression = firstNum, j = 0; j < maxNumbersInProgression; j += 1) {
    progressionArr.push(numInProgression);
    numInProgression += step;
  }
  const result = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  return [result.toString(), progressionArr.join(' ')];
};

const brainProgression = () => {
  gameLogic(
    rulesOfTheGame,
    createProgression,
  );
};

export default brainProgression;
