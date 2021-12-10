import askAnswer from '../askAnswer.js';
import askName from '../askName.js';
import createProgression from '../createProgression.js';
import explainTask from '../explainTask.js';
import greeting from '../greeting.js';
import wrongAnswer from '../wrongAnswer.js';

const brainProgression = () => {
  let attempt = 0;
  greeting();
  const name = askName();
  explainTask('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const [result, progression] = createProgression();
    const answer = askAnswer(progression);
    if (Number(answer) === result) {
      attempt += 1;
      console.log('Correct');
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

export default brainProgression;
