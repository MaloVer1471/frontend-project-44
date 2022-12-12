import randomNumb from '../randomNumb.js';
import gameBase from '../gameComparison.js';

const progressGame = () => {
  const progressNote = 'What number is missing in the progression?';

  const progrTask = () => {
    const arrLength = 8;
    const misNumPosition = randomNumb(7);
    const firstNum = randomNumb(20);
    const increment = randomNumb(19) + 1;
    let quest = [firstNum];

    for (let i = 1; i < arrLength; i += 1) {
      quest.push(firstNum + increment * i);
    }
    let result = quest[misNumPosition];
    quest[misNumPosition] = '..';

    quest = quest.join(' ');
    result = String(result);

    return ([quest, result]);
  };
  gameBase(progressNote, progrTask);
};

export default progressGame;
