import readlineSync from 'readline-sync';
import printMessage from './printMessage.js';

const askAnswer = (param) => {
  const userAnswer = readlineSync.question(`Question: ${param} `);
  printMessage(`Your answer:  ${userAnswer}`);
  return userAnswer;
};

export default askAnswer;
