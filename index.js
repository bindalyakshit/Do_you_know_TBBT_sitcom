var readLineSync=require('readline-sync');
var chalk=require('chalk');
var userName=readLineSync.question("May I have Your name please?\n-> ");
console.log(chalk.green.bgBlue.bold("\nWelcome, " + userName.toUpperCase() + ".\n"));
console.log(chalk.magenta("⭐ ⭐ ⭐ ⭐  Let's see How much you know about THE BIG BANG THEORY  ⭐ ⭐ ⭐ ⭐"));
console.log(chalk.bold("\nHere We Go!!!!!\n"));
console.log("---------------------------------------------------")

console.log(chalk.dim("Initial score: 0"))
console.log("---------------------------------------------------\n\n")
var score=0;

function question(ques,options,ans)
{
  console.log(chalk.bold(ques));
  console.log(chalk.dim("Options: "));
  for(var i=0;i<options.length;i++)
  {
    console.log(chalk.dim(i+1 + ". " +options[i]));
  }
  userAns=readLineSync.question("Your option: ");
  console.log();
  if(userAns==ans)
  {
    score++;
    console.log(chalk.green("Correct answer!!"));
  }
  else
  {
    console.log(chalk.bold.red("OOPS!! Wrong Answer!!!"));
    console.log(chalk.green("Correct answer: " + options[ans-1]));
  }
  console.log("---------------------------------------------------")
  console.log(chalk.dim("Your current score : " + score));
  console.log("---------------------------------------------------")
  console.log();("\n--------------------------------------------------\n");
}

function finalAns()
{
  console.log("\n---------------------------------------------------")
  console.log(chalk.bold("Final score: " + score + "/4."));
  console.log("---------------------------------------------------\n")
  if(score>=4)
  {
    console.log("You do know about the series!!!✌🌟");
  }
  else
  {
    console.log("You don't know well....hnn!! \nBetter luck next time. 🤷‍♂️️️️️️️");
  }
  console.log("\nGood Bye " + userName + "..! See you soon.😄");
}

question("What did Penny calls Sheldon and Amy?",["Amlen","Shammy","Sheldon and Amy","None"],2);
question("Which day was considered as ANYTHING CAN HAPPEN day?",["Friday","Saturday","Thrusday","Sunday"],3);
question("Which bevrage Sheldon served when anyone was sad?",["Hot Tea","Hot Coffee","Beer","Vodka"],1);
question("Which game Sheldon liked the most?",["Scientific games","Dangeon and Dragons","Mario","None"],2);

finalAns()