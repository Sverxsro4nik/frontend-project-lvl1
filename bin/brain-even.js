#!/usr/bin/env node

// Узнаем имя пользователя
import askName from '../src/askName.js';
// Вычисляем случайное число
import randomNum from '../src/randomNum.js';
// определяем четность числа
import isEven from '../src/isEven.js';
// Узнаем у пользователя четность переданного числа
import askEvenNumber from '../src/askEvenNumber.js';
// Обработка неправильного ответа
import wrongAnswer from '../src/wrongAnswer.js';
// Приветствие пользователя
import greeting from '../src/greeting.js';

const checkParity = () => {
  let result = 0;
  greeting();
  askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNum();
    const answer = askEvenNumber(number);
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
