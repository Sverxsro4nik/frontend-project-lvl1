import randomNum from './randomNum.js';

export default () => {
  const operator = ['+', '-', '*'];
  const position = randomNum(0, operator.length - 1);
  return operator[position];
};
