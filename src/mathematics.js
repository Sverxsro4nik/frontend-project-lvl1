// Вычисление случайного числа
const randomNum = (min, max) => {
  const number = Math.round(Math.random() * (max - min) + min);
  return number;
};

// Вычисление большего числа из двух
const largestNum = (first, second) => (first > second ? first : second);
// Вычисление меньшего числа из двух
const smallerNum = (first, second) => (first < second ? first : second);

export {
  largestNum, smallerNum, randomNum,
};
