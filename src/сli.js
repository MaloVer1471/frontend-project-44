import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const findUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${findUserName}!`);
};
export default greeting;
