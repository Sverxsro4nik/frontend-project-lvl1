import { gameLogic } from '../index.js';
import { randomNum } from '../mathematics.js';

// Получаем произвольный оператор
const getOperator = () => {
  const operator = ['+', '-', '*'];
  const endOfArr = operator.length - 1;
  const position = randomNum(0, endOfArr);
  return operator[position];
};

// Выполняем простейшие математические операторы
const calculator = (firstParam, secondParam) => {
  const firstNum = randomNum(firstParam, secondParam);
  const secondNum = randomNum(firstParam, secondParam);
  let answer = 0;
  const operator = getOperator();
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

const brainCalculator = () => {
  gameLogic('What is the result of the expression?', calculator);
};

export default brainCalculator;
