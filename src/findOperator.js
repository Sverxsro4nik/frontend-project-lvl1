import randomNum from './randomNum.js';

export default () => {
  const operator = ['+', '-', '*'];
  const endOfArr = operator.length - 1;
  console.log(endOfArr);
  const position = randomNum(0, endOfArr);
  console.log(position);
  return operator[position];
};
