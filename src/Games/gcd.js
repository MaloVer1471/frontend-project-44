import gameBase from '../gameComparison.js';
import randomNumb from '../randomNumb.js';

const gcd = () => {
  const gcdNote = 'Find the greatest common divisor of given numbers.';

  const gcdTask = () => {
    const num1 = randomNumb(100);
    const num2 = randomNumb(100);

    const quest = `${num1} ${num2}`;

    const getGcd = (numb1, numb2) => {
      if (numb2 === 0) {
        return numb1;
      }
      return getGcd(numb2, numb1 % numb2);
    };

    let result = getGcd(num1, num2);

    result = String(result);

    return ([quest, result]);
  };

  gameBase(gcdNote, gcdTask);
};

export default gcd;
