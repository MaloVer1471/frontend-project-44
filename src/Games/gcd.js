import  runEngine from '../engine.js';
import getRandomInRange from '../randomNumb.js';

const runGCD = () => {
  const GCDNote = 'Find the greatest common divisor of given numbers.';

  const GCDTask = () => {
    const num1 = getRandomInRange(100);
    const num2 = getRandomInRange(100);

    const quest = `${num1} ${num2}`;

    const getrunGCD = (numb1, numb2) => {
      if (numb2 === 0) {
        return numb1;
      }
      return getrunGCD(numb2, numb1 % numb2);
    };

    let result = getrunGCD(num1, num2);

    result = String(result);

    return ([quest, result]);
  };

   runEngine(GCDNote, GCDTask);
};

export default runGCD;
