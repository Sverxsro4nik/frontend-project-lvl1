import readlineSync from 'readline-sync';

const askEvenNumber = (number) => {
  const userAnswer = readlineSync.question(`Question: ${number}`);
  console.log(`Your answer:\n ${userAnswer}`);
  return userAnswer;
};

export default askEvenNumber;
