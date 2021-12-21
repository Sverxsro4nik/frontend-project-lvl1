import launchesGame from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'What is the result of the expression?';

const createProgression = (step, firstNum, maxNumbersInProgression) => {
  const progression = [];
  for (let numInProgression = firstNum, j = 0; j < maxNumbersInProgression; j += 1) {
    progression.push(numInProgression);
    numInProgression += step;
  }
  return progression;
};

const formaionOfResponce = () => {
  const minValue = 1;
  const maxValue = 25;
  const step = randomNum(2, maxValue);
  const firstNum = randomNum(minValue, maxValue);
  const maxNumbersInProgression = 10;
  const randomIndex = randomNum(3, maxNumbersInProgression - 1);
  const progression = createProgression(step, firstNum, maxNumbersInProgression);
  console.log(progression);
  const result = progression[randomIndex];
  progression[randomIndex] = '..';
  console.log(result);
  return [result.toString(), progression.join(' ')];
};

const brainProgression = () => {
  launchesGame(
    rulesOfTheGame,
    formaionOfResponce,
  );
};

export default brainProgression;
