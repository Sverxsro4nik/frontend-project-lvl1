import { gameLogic } from '../index.js';
import { randomNum } from '../mathematics.js';

// Проверка числа на простоту
const isPrime = (firstParam, secondParam) => {
  const needNum = randomNum(firstParam, secondParam);
  if (needNum === 2 || needNum === 1) return ['yes', needNum];
  if (needNum % 2 === 0) return ['no', needNum];
  for (let i = 3; i < needNum; i += 1) {
    if (needNum % i === 0) {
      return ['no', needNum];
    }
  }
  return ['yes', needNum];
};

const brainPrime = () => {
  gameLogic(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    isPrime,
  );
};

export default brainPrime;

// import askAnswer from '../askAnswer.js';
// import askName from '../askName.js';
// import explainTask from '../explainTask.js';
// import randomNum from '../randomNum.js';
// import wrongAnswer from '../wrongAnswer.js';
// import { isPrime } from '../mathematics.js';

// const brainPrime = (numberOfAttempts) => {
//   let attempt = 0;
//   const name = askName();
//   explainTask('Answer "yes" if given number is prime. Otherwise answer "no".');
//   for (let i = 0; i < numberOfAttempts; i += 1) {
//     const number = randomNum(1, 50);
//     const answer = askAnswer(number);
//     const result = isPrime(number);
//     if ((answer === 'yes' && result) || (answer === 'no' && !result)) {
//       attempt += 1;
//       console.log('Correct');
//     } else {
//       // eslint-disable-next-line no-unused-expressions
//       answer === 'yes' ? wrongAnswer(answer, 'no') : wrongAnswer(answer, 'yes');
//       console.log(`Let's try again, ${name}!`);
//       break;
//     }
//   }
//   if (attempt === 3) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };
// export default brainPrime;
