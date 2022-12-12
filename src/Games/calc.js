import gameBase from '../gameComparison.js';
import randomNumb from '../randomNumb.js';

const calc = () => {
  const calcNote = 'What is the result of the expression?';

  const calcTask = () => {
    const num1 = randomNumb(100);
    const num2 = randomNumb(100);

    const signs = ['+', '-', '*'];
    const sing = signs[randomNumb(2)];

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

  gameBase(calcNote, calcTask);
};

export default calc;
