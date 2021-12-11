// Вычисление большего числа из двух
const largestNum = (first, second) => (first > second ? first : second);
// Вычисление меньшего числа из двух
const smallerNum = (first, second) => (first < second ? first : second);
// Проверка числа на простоту
const isPrime = (num) => {
  if (num === 2 || num === 1) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
// Проверка числа на четность
const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
// Вычисление случайного числа
const randomNum = (min, max) => {
  const number = Math.round(Math.random() * (max - min) + min);
  return number;
};

export { largestNum, smallerNum, isPrime, isEven, randomNum };
