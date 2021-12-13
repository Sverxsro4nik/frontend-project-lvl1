import askName from './askName.js';
import askAnswer from './askAnswer.js';
import wrongAnswer from './wrongAnswer.js';
import userCongratilation from './userCongratilation.js';
import correctAnswer from './correctAnswer.js';
import printMessage from './printMessage.js';

const gameLogic = (
  rulesOfTheGame,
  numberOfAttempts,
  gameFunction,
  paramGame,
) => {
  const userName = askName();
  printMessage(rulesOfTheGame);
  let attempt = 0;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [result, answer] = gameFunction(...paramGame);
    const userAnswer = askAnswer(answer);
    if (correctAnswer(result, userAnswer)) {
      console.log('Correct');
      attempt += 1;
    } else {
      wrongAnswer(userAnswer, result);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  userCongratilation(attempt, numberOfAttempts, userName);
};

export default gameLogic;
