import getRandomNum from '../randomNumb.js';
import runEngine from '../engine.js';

const buildProgress = (quest, firstNum) => {
  const arrLength = 8;
  const increment = getRandomNum(1, 19) + 1;
  let progressResult = 0;
  for (let i = 1; i < arrLength; i += 1) {
    progressResult = firstNum + increment * i;
    quest.push(progressResult);
  }
  return quest;
};

const progrTask = () => {
  const misNumPosition = getRandomNum(0, 7);
  const firstNum = getRandomNum(1, 20);
  let quest = [firstNum];

  buildProgress(quest, firstNum);
  let result = quest[misNumPosition];
  quest[misNumPosition] = '..';

  quest = quest.join(' ');
  return ([quest, result]);
};

const runProgressGame = () => {
  const progressNote = 'What number is missing in the progression?';

  progrTask();
  runEngine(progressNote, progrTask);
};

export default runProgressGame;
