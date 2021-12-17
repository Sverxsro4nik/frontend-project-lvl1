import readlineSync from 'readline-sync';

const launchesGame = (rulesOfTheGame, gameFunction) => {
  let attemptCount = 0;
  const numberOfAttempts = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfTheGame);
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [gameResult, gameAnswer] = gameFunction();
    const userAnswer = readlineSync.question(`Question: ${gameAnswer} `);
    console.log(`Your answer:  ${userAnswer}`);
    if (gameResult === userAnswer) {
      console.log('Correct');
      attemptCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameResult}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  if (attemptCount === numberOfAttempts) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default launchesGame;
