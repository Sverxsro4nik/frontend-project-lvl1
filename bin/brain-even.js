#!/usr/bin/env node

// Узнаем имя пользователя
import askName from '../src/askName.js';
// Вычисляем случайное число
import randomNum from '../src/randomNum.js';
// определяем четность числа
import isEven from '../src/isEven.js';
// Узнаем у пользователя четность переданного числа
import askEvenNumber from '../src/askAnswer.js';
// Обработка неправильного ответа
import wrongAnswer from '../src/wrongAnswer.js';
// Приветствие пользователя
import greeting from '../src/greeting.js';
// Обьяснение задачи пользователю
import explainTask from '../src/explainTask.js';

const checkParity = () => {
  let result = 0;
  greeting();
  const name = askName();
  explainTask('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum(100, 1);
    const answer = askEvenNumber(number);
    if (isEven(number) && answer === 'yes') {
      result += 1;
      console.log('Correct');
    } else if (!isEven(number) && answer === 'no') {
      result += 1;
      console.log('Correct');
    } else {
      // eslint-disable-next-line no-unused-expressions
      answer === 'yes' ? wrongAnswer(answer, 'no') : wrongAnswer(answer, 'yes');
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

checkParity();
