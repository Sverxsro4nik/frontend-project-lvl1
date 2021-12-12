import gameLogic from '../index.js';
import { isPrime } from '../mathematics.js';

const brainPrime = () => {
  gameLogic(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    3,
    isPrime,
    [1, 25],
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
