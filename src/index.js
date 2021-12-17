import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askAnswer = (param) => {
  const userAnswer = readlineSync.question(`Question: ${param} `);
  console.log(`Your answer:  ${userAnswer}`);
  return userAnswer;
};

const wrongAnswer = (answer, correct) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}`);
};

const userCongratilation = (attempt, numberOfAttempts, userName) => {
  if (attempt === numberOfAttempts) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const gameLogic = (rulesOfTheGame, gameFunction) => {
  const numberOfAttempts = 3;
  const userName = askName();
  console.log(rulesOfTheGame);
  let attempt = 0;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [result, answer] = gameFunction();
    const userAnswer = askAnswer(answer);
    if (result === userAnswer) {
      console.log('Correct');
      attempt += 1;
    } else {
      wrongAnswer(userAnswer, result);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  userCongratilation(attempt, numberOfAttempts, userName);
};

export { askName, gameLogic };
