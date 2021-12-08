#!/usr/bin/env node

import greeting from '../src/greeting.js';
import askName from '../src/askName.js';
import explainTask from '../src/explainTask.js';
import randomNum from '../src/randomNum.js';
import askAnswer from '../src/askAnswer.js';
import wrongAnswer from '../src/wrongAnswer.js';

const brainGcd = () => {
  greeting();
  const name = askName();
  let count = 0;
  explainTask('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNum(1, 100);
    const secondNumber = randomNum(1, 100);
    const answer = askAnswer(`${firstNumber} ${secondNumber}`);
    const result = 1;
    if (answer === result) {
      count += 1;
      console.log('Correct');
    } else {
      wrongAnswer();
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainGcd();
