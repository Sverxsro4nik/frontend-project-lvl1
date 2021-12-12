// Вычисление случайного числа
const randomNum = (min, max) => {
  const number = Math.round(Math.random() * (max - min) + min);
  return number;
};

// Вычисление большего числа из двух
const largestNum = (first, second) => (first > second ? first : second);
// Вычисление меньшего числа из двух
const smallerNum = (first, second) => (first < second ? first : second);
// Проверка числа на простоту
const isPrime = (firstParam, secondParam) => {
  const needNum = randomNum(firstParam, secondParam);
  if (needNum % 2 === 0) return ['no', needNum];
  if (needNum === 2 || needNum === 1) return ['yes', needNum];
  for (let i = 3; i < needNum; i += 1) {
    if (needNum % i === 0) {
      return ['no', needNum];
    }
  }
  return ['yes', needNum];
};
// Проверка числа на четность
const isEven = (start, end) => {
  const number = randomNum(start, end);
  return [number % 2 === 0 ? 'yes' : 'no', `${number}`];
};

export {
  largestNum, smallerNum, isPrime, isEven, randomNum,
};
