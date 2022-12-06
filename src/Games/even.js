import gameBase from '../gameComparison.js';
import randomN from '../randomNumb.js';

const evenGame = () => {
  const gameNote = "Answer 'yes' if the number is even, otherwise answer 'no'.";

  const evenQuest = () => {
    const numb = randomN(100);

    const checkEven = (num) => num % 2 === 0;

    const questionNumb = `${numb}`;

    const result = (checkEven(numb) ? 'yes' : 'no');

    return [questionNumb, result];
  };

  gameBase(gameNote, evenQuest);
};

export default evenGame;
