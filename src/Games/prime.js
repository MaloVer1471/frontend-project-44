import gameBase from '../gameComparison.js';
import randomNumb from '../randomNumb.js';

const prime = () => {
  const primeNote = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeTask = () => {
    const numb = randomNumb(100);

    const primeNum = (num) => {
      if (num < 2) { return false; }

      let i = 2;
      while (i <= num / 2) {
        if (num % i === 0) { return false; }
        i += 1;
      }

      return true;
    };
    const quest = `${numb}`;

    const result = (primeNum(numb) ? 'yes' : 'no');

    return ([quest, result]);
  };
  gameBase(primeNote, primeTask);
};

export default prime;
