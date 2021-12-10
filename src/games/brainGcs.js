import greeting from '../greeting.js';
import askName from '../askName.js';
import explainTask from '../explainTask.js';
import randomNum from '../randomNum.js';
import askAnswer from '../askAnswer.js';
import wrongAnswer from '../wrongAnswer.js';
import greatestCommonFactor from '../greatestCommonFactor.js';

const brainGcd = () => {
  greeting();
  const name = askName();
  let count = 0;
  explainTask('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNum(1, 100);
    const secondNumber = randomNum(1, 100);
    const answer = askAnswer(`${firstNumber} ${secondNumber}`);
    const result = greatestCommonFactor(firstNumber, secondNumber);
    if (Number(answer) === result) {
      count += 1;
      console.log('Correct');
    } else {
      wrongAnswer(answer, result);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainGcd;
