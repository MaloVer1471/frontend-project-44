import  runEngine from '../engine.js';
import getRandomInRange from '../randomNumb.js';

const runEvenGame = () => {
  const gameNote = 'Answer "yes" if the number is even, otherwise answer "no".';

  const evenQuest = () => {
    const numb = getRandomInRange(100);

    const checkEven = (num) => num % 2 === 0;

    const questionNumb = `${numb}`;

    const result = (checkEven(numb) ? 'yes' : 'no');

    return ([questionNumb, result]);
  };

   runEngine(gameNote, evenQuest);
};

export default runEvenGame;
