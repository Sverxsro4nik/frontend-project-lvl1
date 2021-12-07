const calculator = (firstParam, secondParam, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstParam + secondParam;
      break;
    case '-':
      answer = firstParam - secondParam;
      break;
    case '*':
      answer = firstParam * secondParam;
      break;
    default:
      break;
  }
  return answer;
};

export default calculator;
