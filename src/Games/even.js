import runEngine from '../engine.js';
import getRandomNum from '../randomNumb.js';

const evenQuest = () => {
  const numb = getRandomNum(1, 100);

  const checkEven = (num) => num % 2 === 0;

  const questionNumb = `${numb}`;

  const result = (checkEven(numb) ? 'yes' : 'no');

  return ([questionNumb, result]);
};

const runEvenGame = () => {
  const gameNote = 'Answer "yes" if the number is even, otherwise answer "no".';

  evenQuest();

  runEngine(gameNote, evenQuest);
};

export default runEvenGame;
