import greeting from '../greeting.js';
import askName from '../askName.js';
import explainTask from '../explainTask.js';
import calculator from '../calculator.js';
import randomNum from '../randomNum.js';
import findOperator from '../findOperator.js';
import askAnswer from '../askAnswer.js';
import wrongAnswer from '../wrongAnswer.js';

const brainCalculator = () => {
  greeting();
  const name = askName();
  explainTask('What is the result of the expression?');
  let attempt = 0;
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomNum(1, 25);
    const secondNum = randomNum(1, 25);
    const operator = findOperator();
    const questionString = `${firstNum} ${operator} ${secondNum}`;
    const result = calculator(firstNum, secondNum, operator);
    const answer = askAnswer(questionString);
    if (Number(answer) === result) {
      console.log('Correct');
      attempt += 1;
    } else {
      wrongAnswer(answer, result);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (attempt === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalculator;
