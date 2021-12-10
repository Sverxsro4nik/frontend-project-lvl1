import askAnswer from '../askAnswer.js';
import askName from '../askName.js';
import explainTask from '../explainTask.js';
import greeting from '../greeting.js';
import randomNum from '../randomNum.js';
import wrongAnswer from '../wrongAnswer.js';
import { isPrime } from '../mathematics.js';

const brainPrime = () => {
  let attempt = 0;
  greeting();
  const name = askName();
  explainTask('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum(1, 50);
    const answer = askAnswer(number);
    const result = isPrime(number);
    if (answer === 'yes' && result) {
      attempt += 1;
      console.log('Correct');
    } else if (answer === 'no' && !result) {
      attempt += 1;
      console.log('Correct');
    } else {
      // eslint-disable-next-line no-unused-expressions
      answer === 'yes' ? wrongAnswer(answer, 'no') : wrongAnswer(answer, 'yes');
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (attempt === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brainPrime;
