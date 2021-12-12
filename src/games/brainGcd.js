import gameLogic from '../index.js';
import greatestCommonFactor from '../greatestCommonFactor.js';

const brainGcd = () => {
  gameLogic(
    'Find the greatest common divisor of given numbers.',
    3,
    greatestCommonFactor,
    [1, 25],
  );
};
export default brainGcd;
