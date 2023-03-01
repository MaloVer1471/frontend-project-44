import  runEngine from '../engine.js';
import getRandomInRange from '../randomNumb.js';

const runPrime = () => {
  const primeNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeTask = () => {
    const numb = getRandomInRange(100);
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
    const result = isPrimeNum(numb);
    return ([numb, result]);
  };
   runEngine(primeNote, primeTask);
};

export default runPrime;
