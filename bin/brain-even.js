import readlineSync from 'readline-sync';

const Greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const answerName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
};

const checkParity = () => {
  Greeting();
  answerName();
};
