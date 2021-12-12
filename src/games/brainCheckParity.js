import gameLogic from '../index.js';
import { isEven } from '../mathematics.js';

const brainCheckParity = () => {
  gameLogic(
    'Answer "yes" if the number is even, otherwise answer "no".',
    3,
    isEven,
    [1, 25],
  );
};

export default brainCheckParity;
