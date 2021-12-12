import findOperator from './findOperator.js';
import { randomNum } from './mathematics.js';

const calculator = (firstParam, secondParam) => {
  const firstNum = randomNum(firstParam, secondParam);
  const secondNum = randomNum(firstParam, secondParam);
  let answer = 0;
  const operator = findOperator();
  switch (operator) {
    case '+':
      answer = firstNum + secondNum;
      break;
    case '-':
      answer = firstNum - secondNum;
      break;
    case '*':
      answer = firstNum * secondNum;
      break;
    default:
      break;
  }
  return [answer, `${firstNum} ${operator} ${secondNum}`];
};

export default calculator;
