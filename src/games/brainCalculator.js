import gameLogic from '../index.js';
import calculator from '../calculator.js';

const brainCalculator = () => {
  gameLogic('What is the result of the expression?', 3, calculator, [1, 25]);
};

export default brainCalculator;
