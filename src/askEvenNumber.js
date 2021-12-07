import readlineSync from 'readline-sync';

const askAnswer = (param) => {
  const userAnswer = readlineSync.question(`Question: ${param}`);
  console.log(`Your answer:\n ${userAnswer}`);
  return userAnswer;
};

export default askAnswer;
