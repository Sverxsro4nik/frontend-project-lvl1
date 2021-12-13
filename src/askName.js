import readlineSync from 'readline-sync';
import printMessage from './printMessage.js';

const askName = () => {
  printMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  printMessage(`Hello, ${userName}!`);
  return userName;
};

export default askName;
