import readlineSync from 'readline-sync';

const printMessage = (str) => console.log(str);

const askName = () => {
  printMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  printMessage(`Hello, ${userName}!`);
  return userName;
};

const askAnswer = (param) => {
  const userAnswer = readlineSync.question(`Question: ${param} `);
  printMessage(`Your answer:  ${userAnswer}`);
  return userAnswer;
};

const wrongAnswer = (answer, correct) => {
  printMessage(`${answer} is wrong answer ;(. Correct answer was ${correct}`);
};

// eslint-disable-next-line max-len
const correctAnswer = (trueValue, answer) => (trueValue === Number(answer)) || (trueValue === answer);

const userCongratilation = (attempt, numberOfAttempts, userName) => {
  if (attempt === numberOfAttempts) {
    printMessage(`Congratulations, ${userName}!`);
  }
};

const gameLogic = (rulesOfTheGame, gameFunction) => {
  const numberOfAttempts = 3;
  const startNumber = 1;
  const endNumber = 25;
  const userName = askName();
  printMessage(rulesOfTheGame);
  let attempt = 0;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [result, answer] = gameFunction(startNumber, endNumber);
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

export { askName, gameLogic };
