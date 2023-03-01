import  runEngine from '../engine.js';
import getRandomInRange from '../randomNumb.js';

const runCalc = () => {
  const calcNote = 'What is the result of the expression?';

  const calcTask = () => {
    const num1 = getRandomInRange(100);
    const num2 = getRandomInRange(100);

    const signs = ['+', '-', '*'];
    const sing = signs[getRandomInRange(2)];

    const quest = `${num1} ${sing} ${num2}`;

    let result = 0;
    switch (sing) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }

    result = result.toString();

    return ([quest, result]);
  };

   runEngine(calcNote, calcTask);
};

export default runCalc;
