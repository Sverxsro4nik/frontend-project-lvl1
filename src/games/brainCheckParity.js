// Узнаем имя пользователя
import askName from '../askName.js';
// Вычисляем случайное число
import randomNum from '../randomNum.js';
// определяем четность числа
import isEven from '../isEven.js';
// Узнаем у пользователя четность переданного числа
import askEvenNumber from '../askAnswer.js';
// Обработка неправильного ответа
import wrongAnswer from '../wrongAnswer.js';
// Обьяснение задачи пользователю
import explainTask from '../explainTask.js';

const brainCheckParity = (numberOfAttempts) => {
  let result = 0;
  const name = askName();
  explainTask('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const number = randomNum(100, 1);
    const answer = askEvenNumber(number);
    if (isEven(number) === answer) {
      result += 1;
      console.log('Correct');
    } else {
      // eslint-disable-next-line no-unused-expressions
      answer === 'yes' ? wrongAnswer(answer, 'no') : wrongAnswer(answer, 'yes');
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCheckParity;
