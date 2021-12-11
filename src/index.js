import askName from './askName.js';
import explainTask from './explainTask.js';
import randomNum from './randomNum.js';
import findOperator from './findOperator.js';
import askAnswer from './askAnswer.js';
import wrongAnswer from './wrongAnswer.js';
import userCongratilation from './userCongratilation.js';

const gameLogic = (rulesOfTheGame, numberOfAttempts, gameFunction) => {
  const userName = askName();
  explainTask(rulesOfTheGame);
  let attempt = 0;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const firstNum = randomNum(1, 25);
    const secondNum = randomNum(1, 25);
    const operator = findOperator();
    const questionString = `${firstNum} ${operator} ${secondNum}`;
    const result = gameFunction(firstNum, secondNum, operator);
    const answer = askAnswer(questionString);
    if (Number(answer) === result) {
      console.log('Correct');
      attempt += 1;
    } else {
      wrongAnswer(answer, result);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  userCongratilation(attempt, numberOfAttempts, userName);
};

export default gameLogic;
// for (let i = 0; i < numberOfAttempts; i += 1) {
//   const [result, progression] = createProgression();
//   const answer = askAnswer(progression);
//   if (Number(answer) === result) {
//     attempt += 1;
//     console.log('Correct');
//   } else {
//     wrongAnswer(answer, result);
//     console.log(`Let's try again, ${name}!`);
//     break;
//   }
// }
// for (let i = 0; i < numberOfAttempts; i += 1) {
//   const number = randomNum(1, 50);
//   const answer = askAnswer(number);
//   const result = isPrime(number);
//   if ((answer === 'yes' && result) || (answer === 'no' && !result)) {
//     attempt += 1;
//     console.log('Correct');
//   } else {
//     // eslint-disable-next-line no-unused-expressions
//     answer === 'yes' ? wrongAnswer(answer, 'no') : wrongAnswer(answer, 'yes');
//     console.log(`Let's try again, ${name}!`);
//     break;
//   }
// }

// for (let i = 0; i < numberOfAttempts; i += 1) {
//   const number = randomNum(100, 1);
//   const answer = askEvenNumber(number);
//   if (isEven(number) === answer) {
//     result += 1;
//     console.log('Correct');
//   } else {
//     // eslint-disable-next-line no-unused-expressions
//     answer === 'yes' ? wrongAnswer(answer, 'no') : wrongAnswer(answer, 'yes');
//     console.log(`Let's try again, ${name}!`);
//     break;
//   }
// }

// for (let i = 0; i < numberOfAttempts; i += 1) {
//   const firstNumber = randomNum(1, 100);
//   const secondNumber = randomNum(1, 100);
//   const answer = askAnswer(`${firstNumber} ${secondNumber}`);
//   const result = greatestCommonFactor(firstNumber, secondNumber);
//   if (Number(answer) === result) {
//     count += 1;
//     console.log('Correct');
//   } else {
//     wrongAnswer(answer, result);
//     console.log(`Let's try again, ${name}!`);
//     break;
//   }
// }
