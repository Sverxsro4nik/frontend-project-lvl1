import readlineSync from 'readline-sync';
import greeting from './greeting.js';

const askName = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default askName;
