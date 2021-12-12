import createProgression from '../createProgression.js';
import gameLogic from '../index.js';

const brainProgression = () => {
  gameLogic(
    'What is the result of the expression?',
    3,
    createProgression,
    [1, 25, 2, 3],
  );
};

export default brainProgression;
