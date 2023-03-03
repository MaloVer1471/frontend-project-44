import runEngine from '../engine.js';
import getRandomNum from '../randomNumb.js';

const getrunGCD = (numb1, numb2) => {
  if (numb2 === 0) {
    return numb1;
  }
  return getrunGCD(numb2, numb1 % numb2);
};

const GCDTask = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  const quest = `${num1} ${num2}`;

  const result = getrunGCD(num1, num2);
  return ([quest, result]);
};

const runGCD = () => {
  const GCDNote = 'Find the greatest common divisor of given numbers.';

  GCDTask();
  runEngine(GCDNote, GCDTask);
};

export default runGCD;
