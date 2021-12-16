import { gameLogic } from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'What is the result of the expression?';

// Получаем произвольный оператор
const getOperator = () => {
  const operator = ['+', '-', '*'];
  const endOfArr = operator.length - 1;
  const position = randomNum(0, endOfArr);
  return operator[position];
};

// Выполняем простейшие математические операторы
const calculator = (firstParam, secondParam) => {
  let answer = 0;
  const operator = getOperator();
  switch (operator) {
    case '+':
      answer = firstParam + secondParam;
      break;
    case '-':
      answer = firstParam - secondParam;
      break;
    case '*':
      answer = firstParam * secondParam;
      break;
    default:
      break;
  }
  return [answer, operator];
};

const calcResponce = (firstParam, secondParam) => {
  const firstNum = randomNum(firstParam, secondParam);
  const secondNum = randomNum(firstParam, secondParam);
  const [anwser, operator] = calculator(firstNum, secondNum);
  return [anwser, `${firstNum} ${operator} ${secondNum}`];
};

const brainCalculator = () => {
  gameLogic(rulesOfTheGame, calcResponce);
};

export default brainCalculator;
