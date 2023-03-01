import getRandomInRange from '../randomNumb.js';
import  runEngine from '../engine.js';

const runProgressGame = () => {
  const progressNote = 'What number is missing in the progression?';

  const progrTask = () => {
    const arrLength = 8;
    const misNumPosition = getRandomInRange(7);
    const firstNum = getRandomInRange(20);
    const increment = getRandomInRange(19) + 1;
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
   runEngine(progressNote, progrTask);
};

export default runProgressGame;
