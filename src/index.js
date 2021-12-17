import readlineSync from 'readline-sync';

const gameLogic = (rulesOfTheGame, gameFunction) => {
  let attempt = 0;
  const numberOfAttempts = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfTheGame);
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [result, answer] = gameFunction();
    const userAnswer = readlineSync.question(`Question: ${answer} `);
    console.log(`Your answer:  ${userAnswer}`);
    if (result === userAnswer) {
      console.log('Correct');
      attempt += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  if (attempt === numberOfAttempts) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameLogic;
