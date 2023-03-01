import readlineSync from 'readline-sync';

const  runEngine = (rules, makeRound) => {
  console.log('Welcome to the Brain Games!');

  const findUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${findUserName}!`);

  console.log(rules);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = makeRound()

    console.log(`Question: ${questionAndResult[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const rightAnswer = questionAndResult[1];

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${findUserName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${findUserName}!`);
};

export default  runEngine;
