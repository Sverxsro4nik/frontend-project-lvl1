import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'What is the result of the expression?';

const createProgression = (step, firstNum, maxNumbersInProgression) => {
  const progressionArr = [];
  const randomIndex = randomNum(3, progressionArr.length);
  for (let numInProgression = firstNum, j = 0; j < maxNumbersInProgression; j += 1) {
    progressionArr.push(numInProgression);
    numInProgression += step;
  }
  const result = progressionArr[randomIndex];
  progressionArr[randomIndex] = '..';
  return [result, progressionArr];
};

const formaionOfResponce = () => {
  const minValue = 1;
  const maxValue = 25;
  const step = randomNum(2, maxValue);
  const firstNum = randomNum(minValue, maxValue);
  const maxNumbersInProgression = 10;
  const [result, progressionArr] = createProgression(step, firstNum, maxNumbersInProgression);
  return [result.toString(), progressionArr.join(' ')];
};

const brainProgression = () => {
  gameLogic(
    rulesOfTheGame,
    formaionOfResponce,
  );
};

export default brainProgression;
