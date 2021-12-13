import printMessage from './printMessage.js';

const userCongratilation = (attempt, numberOfAttempts, userName) => {
  if (attempt === numberOfAttempts) {
    printMessage(`Congratulations, ${userName}!`);
  }
};

export default userCongratilation;
