import readlineSync from 'readline-sync';

const runEngine = (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');

  const findUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${findUserName}!`);

  console.log(rules);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = makeRound();

    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = Number.isNaN(+userAnswer) ? userAnswer : +userAnswer;

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${findUserName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${findUserName}!`);
};

export default runEngine;
