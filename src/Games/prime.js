import runEngine from '../engine.js';
import getRandomNum from '../randomNumb.js';

const isPrimeNum = (num) => {
  let divisorCount = 0;
  const halfOfNum = Math.round(num / 2);
  for (let i = 1; i <= halfOfNum; i += 1) {
    if (num % i === 0) {
      divisorCount += 1;
    }
    if (divisorCount > 1) {
      return ('no');
    }
  }
  return ('yes');
};

const primeTask = () => {
  const numb = getRandomNum(1, 100);
  const result = isPrimeNum(numb);
  return ([numb, result]);
};

const runPrime = () => {
  const primeNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  primeTask();
  runEngine(primeNote, primeTask);
};

export default runPrime;
