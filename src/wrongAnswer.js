import printMessage from './printMessage.js';

const wrongAnswer = (answer, correct) => {
  printMessage(`${answer} is wrong answer ;(. Correct answer was ${correct}`);
};
export default wrongAnswer;
