import gameBase from '../gameComparison.js';
import randomNumb from '../randomNumb.js';

const gcd = () => {
  const gcdNote = 'Find the greatest common divisor of given numbers.';

  const gcdTask = () => {
    const num1 = randomNumb(100);
    const num2 = randomNumb(100);

    const quest = `${num1} ${num2}`;

    const gcdGet = (numb1, numb2) => {
      let number1 = numb1;
      let number2 = numb2;
      while (number1 !== 0 && number2 !== 0) {
        if (number1 > number2) {
          number1 %= number2;
        } else {
          number2 %= number1;
        }
      }
      return (number1 + number2);
    };

    const result = gcdGet(num1, num2).toString();

    return [quest, result];
  };

  gameBase(gcdNote, gcdTask);
};

export default gcd;
