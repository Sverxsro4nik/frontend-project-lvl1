import launchesGame from '../index.js';
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
  const operator = getOperator();
  const answer = calculator(firstNum, secondNum, operator);
  return [answer.toString(), `${firstNum} ${operator} ${secondNum}`];
};

const brainCalculator = () => {
  launchesGame(rulesOfTheGame, formaionOfResponce);
};

export default brainCalculator;
