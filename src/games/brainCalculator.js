import launchesGame from '../index.js';
import randomNum from '../randomNum.js';

const rulesOfTheGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

// Выполняем простейшие математические операторы
const calculator = (firstParam, secondParam, operator) => {
  let answer = 0;
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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
  return answer;
};

// Формируем ответ
const formaionOfResponce = () => {
  const minValue = 1;
  const maxValue = 25;
  const firstNum = randomNum(minValue, maxValue);
  const secondNum = randomNum(minValue, maxValue);
  const endOfArr = operators.length - 1;
  const randomOperator = operators[randomNum(0, endOfArr)];
  const answer = calculator(firstNum, secondNum, randomOperator);
  return [answer.toString(), `${firstNum} ${randomOperator} ${secondNum}`];
};

const brainCalculator = () => {
  launchesGame(rulesOfTheGame, formaionOfResponce);
};

export default brainCalculator;
