#!/usr/bin/env node

import greeting from '../src/greeting.js';
import askName from '../src/askName.js';
import explainTask from '../src/explainTask.js';
import calculator from '../src/calculator.js';

const brainCalculator = () => {
  greeting();
  askName();
  explainTask('What is the result of the expression?');
  calculator();
};

brainCalculator();
