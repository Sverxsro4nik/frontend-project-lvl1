const largestNum = (first, second) => (first > second ? first : second);
const smallerNum = (first, second) => (first < second ? first : second);
const isPrime = (num) => {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export { largestNum, smallerNum, isPrime };
