import readlineSync from 'readline-sync';

const numberOfAttempts = 3;

const launchesGame = (rulesOfTheGame, gameFunction) => {
  // Вход в игру
  console.log('Welcome to the Brain Games!');
  // Получение имени пользователя
  const userName = readlineSync.question('May I have your name? ');
  // Приветствие пользователя по имени
  console.log(`Hello, ${userName}!`);
  // Вывод правил игры
  console.log(rulesOfTheGame);
  // Рабочий цикл игры
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [gameResult, gameAnswer] = gameFunction();
    const userAnswer = readlineSync.question(`Question: ${gameAnswer} `);
    console.log(`Your answer:  ${userAnswer}`);
    if (gameResult === userAnswer) {
      console.log('Correct');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameResult}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  // Поздравление пользователя с выигрышем
  console.log(`Congratulations, ${userName}!`);
};

export default launchesGame;
