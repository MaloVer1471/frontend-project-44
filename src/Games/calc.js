import runEngine from '../engine.js';
import getRandomNum from '../randomNumb.js';

const calculation = (num1, num2, operator) => { switch (operator) { case '+': return num1 + num2; case '-': return num1 - num2; case '*': return num1 * num2; default: return null; } };

const calcTask = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const signs = ['+', '-', '*'];
  const operator = signs[getRandomNum(0, 2)];

  const quest = `${num1} ${operator} ${num2}`;

  const result = calculation(num1, num2, operator);
  return ([quest, result]);
};

const runCalc = () => {
  const calcNote = 'What is the result of the expression?';

  calcTask();

  runEngine(calcNote, calcTask);
};

export default runCalc;
