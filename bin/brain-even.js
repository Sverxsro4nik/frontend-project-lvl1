#!/usr/bin/env node
import readlineSync from 'readline-sync';

import askName from '../src/askName.js';

const randomNum = () => {
  const number = Math.round(Math.random() * 100);
  return number;
};

const isEven = (number) => number % 2 === 0;

const answerEvenNumber = (number) => {
  const userAnswer = readlineSync.question(`Question: ${number}`);
  console.log(`Your answer:\n ${userAnswer}`);
  return userAnswer;
};

const wrongAnswer = (str) => {
  if (str === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
  } else {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
  }
};

const checkParity = () => {
  let result = 0;
  console.log('Welcome to the Brain Games!');
  askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum();
    const answer = answerEvenNumber(number);
    if (isEven(number) && answer === 'yes') {
      result += 1;
    } else if (!isEven(number) && answer === 'no') {
      result += 1;
    } else {
      // eslint-disable-next-line no-unused-expressions
      answer === 'yes' ? wrongAnswer(answer) : wrongAnswer(answer);
      break;
    }
  }
  if (result === 3) {
    console.log('Correct');
  }
};

checkParity();
