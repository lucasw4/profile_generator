const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('What is your name? ', (answer) => {
  answers.push(`My name is: ${answer}. `);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answers.push(`I like: ${answer} `);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(`while listening to: ${answer}. `);
      rl.question('Which meal time is your favorite? (eg. dinner, brunch, breakfast) ', (answer) => {
        answers.push(`My favorite meal time is: ${answer} `);
        rl.question('Whats your favorite thing to eat? ', (answer) => {
          answers.push(`and my favorite thing to eat is: ${answer}. `);
          rl.question('Favorite sport? ', (answer) => {
            answers.push(`My favorite sport is: ${answer}. `);
            rl.question('What is your superpower? ', (answer) => {
              answers.push(`My superpower is: ${answer}.`);
              for (let i of answers) {
                process.stdout.write(i);
              }
              console.log();
              rl.close();
            });
          });
        });
      });
    });
  });
});