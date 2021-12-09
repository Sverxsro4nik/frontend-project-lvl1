import greeting from '../src/greeting.js';
import askName from '../src/askName.js';
import explainTask from '../src/explainTask.js';
import calculator from '../src/calculator.js';
import randomNum from '../src/randomNum.js';
import findOperator from '../src/findOperator.js';
import askAnswer from '../src/askAnswer.js';
import wrongAnswer from '../src/wrongAnswer.js';

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
